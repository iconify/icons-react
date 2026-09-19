import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygv58pb8j.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygv58pb8j"/>`,
		"fallback": "fluent-mdl2:skype-check",
	});
}

export default Component;
