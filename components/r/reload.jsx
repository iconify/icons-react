import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rdnexrb-i.css';
import '../../css/t/tbnh3xbqt.css';
import '../../css/b/bq_htov1v.css';
import '../../css/p/p5eo-acjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rdnexrb-i"/><path class="tbnh3xbqt"/><path class="bq_htov1v"/><path class="p5eo-acjt"/></g>`,
		"fallback": "mage:reload",
	});
}

export default Component;
