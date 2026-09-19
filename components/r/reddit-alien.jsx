import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrjct8wjy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrjct8wjy"/>`,
		"fallback": "fa6-brands:reddit-alien",
	});
}

export default Component;
