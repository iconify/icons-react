import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/orqtdgb5k.css';
import '../../css/t/tylu5nb4d.css';
import '../../css/g/gkiwa1bxg.css';
import '../../css/o/o5oealbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="orqtdgb5k"/><path class="tylu5nb4d"/><path class="gkiwa1bxg"/><path class="o5oealbwh"/></g>`,
		"fallback": "solar:sd-card-line-duotone",
	});
}

export default Component;
