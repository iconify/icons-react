import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tfcg2mm7x.css';
import '../../css/m/mpq3hhbfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tfcg2mm7x"/><path class="mpq3hhbfo"/></g>`,
		"fallback": "hugeicons:roblox",
	});
}

export default Component;
