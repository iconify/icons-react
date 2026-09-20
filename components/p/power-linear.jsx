import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/ny50c9bxo.css';
import '../../css/h/hg2ix5s9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ny50c9bxo"/><path class="hg2ix5s9t"/></g>`,
		"fallback": "solar:power-linear",
	});
}

export default Component;
