import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg7cm0bwb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg7cm0bwb"/>`,
		"fallback": "quill:queue",
	});
}

export default Component;
