import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3_-1ujvk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3_-1ujvk"/>`,
		"fallback": "fluent-mdl2:page-add",
	});
}

export default Component;
