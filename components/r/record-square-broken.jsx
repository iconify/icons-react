import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z-k-tgbdh.css';
import '../../css/h/h7hbobcdx.css';
import '../../css/u/ubfykzbta.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z-k-tgbdh"/><path class="h7hbobcdx"/><path class="ubfykzbta"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:record-square-broken",
	});
}

export default Component;
