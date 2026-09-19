import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zfn_heb_z.css';
import '../../css/m/m65mk-ths.css';
import '../../css/q/q_s4rbbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zfn_heb_z"/><path class="m65mk-ths"/><path class="q_s4rbbpt"/></g>`,
		"fallback": "iconoir:npm-square",
	});
}

export default Component;
