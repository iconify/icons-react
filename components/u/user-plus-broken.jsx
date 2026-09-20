import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o_onwfy1m.css';
import '../../css/x/xvnzy1b7z.css';
import '../../css/q/qgimfw8xw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="o_onwfy1m"/><path class="xvnzy1b7z"/><path class="qgimfw8xw"/></g>`,
		"fallback": "solar:user-plus-broken",
	});
}

export default Component;
