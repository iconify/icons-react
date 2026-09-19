import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvmupi87j.css';
import '../../css/w/wx-066bcp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvmupi87j"/><path class="wx-066bcp"/>`,
		"fallback": "carbon:transform-language",
	});
}

export default Component;
