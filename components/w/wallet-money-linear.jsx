import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ohsv2hiuv.css';
import '../../css/k/kknuolbeb.css';
import '../../css/s/s56xsmbuu.css';
import '../../css/l/lx3zoyb_j.css';
import '../../css/v/voq45tm1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ohsv2hiuv"/><path class="kknuolbeb"/><path class="s56xsmbuu"/><path class="lx3zoyb_j"/><path class="voq45tm1g"/></g>`,
		"fallback": "solar:wallet-money-linear",
	});
}

export default Component;
