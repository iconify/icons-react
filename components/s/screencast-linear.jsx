import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ik4yyycul.css';
import '../../css/v/v4tckp_mx.css';
import '../../css/d/dxz_62g8x.css';
import '../../css/u/uzj9wplpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ik4yyycul"/><path class="v4tckp_mx"/><path class="dxz_62g8x"/><path class="uzj9wplpi"/></g>`,
		"fallback": "solar:screencast-linear",
	});
}

export default Component;
