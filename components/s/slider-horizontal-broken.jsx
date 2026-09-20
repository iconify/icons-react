import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/ten2dqbwx.css';
import '../../css/o/oockgugaw.css';
import '../../css/a/axjtsp52f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ten2dqbwx"/><path class="oockgugaw"/><path class="axjtsp52f"/></g>`,
		"fallback": "solar:slider-horizontal-broken",
	});
}

export default Component;
