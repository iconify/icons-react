import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/a/a5yqgt9oz.css';
import '../../css/o/o_vsnhzlf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="a5yqgt9oz"/><path class="o_vsnhzlf"/></g>`,
		"fallback": "solar:square-double-alt-arrow-right-linear",
	});
}

export default Component;
