import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd0jblbxb.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd0jblbxb"/>`,
		"fallback": "fa6-brands:square-upwork",
	});
}

export default Component;
