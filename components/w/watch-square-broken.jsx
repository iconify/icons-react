import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e1_dsdb2x.css';
import '../../css/c/cy07d15rp.css';
import '../../css/f/fdsu-dbih.css';
import '../../css/w/wtnotgb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e1_dsdb2x"/><path class="cy07d15rp"/><path class="fdsu-dbih"/><path class="wtnotgb3w"/></g>`,
		"fallback": "solar:watch-square-broken",
	});
}

export default Component;
