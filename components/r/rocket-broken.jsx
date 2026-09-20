import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r75ibw1at.css';
import '../../css/y/ywaaisbty.css';
import '../../css/q/qevjdebni.css';
import '../../css/t/tangbccak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r75ibw1at"/><path class="ywaaisbty"/><path class="qevjdebni"/><path class="tangbccak"/></g>`,
		"fallback": "solar:rocket-broken",
	});
}

export default Component;
