import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4fp7zb9j.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4fp7zb9j"/>`,
		"fallback": "fluent-mdl2:navigate-external-inline",
	});
}

export default Component;
