import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oi11_7bsu.css';
import '../../css/s/sxfxf1bmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="oi11_7bsu"/><path class="sxfxf1bmm"/></g>`,
		"fallback": "streamline-ultimate:trip-pin-multiple",
	});
}

export default Component;
