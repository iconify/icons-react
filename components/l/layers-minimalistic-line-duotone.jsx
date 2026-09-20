import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tmqkr8aln.css';
import '../../css/o/ohnkn1dtv.css';
import '../../css/s/s-vjqccqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tmqkr8aln"/><path class="ohnkn1dtv"/><path class="s-vjqccqw"/></g>`,
		"fallback": "solar:layers-minimalistic-line-duotone",
	});
}

export default Component;
