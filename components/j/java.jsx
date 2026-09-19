import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wyu27vjiy.css';
import '../../css/f/fhniiwjsf.css';
import '../../css/h/ht6h7d_qp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wyu27vjiy"/><path class="fhniiwjsf"/><path class="ht6h7d_qp"/></g>`,
		"fallback": "catppuccin:java",
	});
}

export default Component;
