import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z25748dkk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z25748dkk"/>`,
		"fallback": "fluent-mdl2:stop",
	});
}

export default Component;
