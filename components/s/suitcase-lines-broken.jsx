import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hq-5njbjh.css';
import '../../css/g/gmsfucc8d.css';
import '../../css/n/nq90nsjcw.css';
import '../../css/f/femrn7bog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hq-5njbjh"/><path class="gmsfucc8d"/><path class="nq90nsjcw"/><path class="femrn7bog"/></g>`,
		"fallback": "solar:suitcase-lines-broken",
	});
}

export default Component;
