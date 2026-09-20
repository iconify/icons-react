import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dbau8-eqm.css';
import '../../css/g/g8omf2bun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dbau8-eqm"/><path class="g8omf2bun"/></g>`,
		"fallback": "solar:pause-broken",
	});
}

export default Component;
