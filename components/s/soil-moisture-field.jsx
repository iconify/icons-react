import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q9bp_qb7g.css';
import '../../css/c/czut7sbsn.css';
import '../../css/w/wu6n2nbqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q9bp_qb7g"/><path class="czut7sbsn"/><path class="wu6n2nbqe"/></g>`,
		"fallback": "hugeicons:soil-moisture-field",
	});
}

export default Component;
