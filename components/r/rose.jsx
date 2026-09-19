import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/ri7r21frf.css';
import '../../css/f/f_jesn_rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ri7r21frf"/><path class="f_jesn_rj"/></g>`,
		"fallback": "hugeicons:rose",
	});
}

export default Component;
