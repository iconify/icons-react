import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9u8nhb5n.css';
import '../../css/j/jyg6q1bpv.css';
import '../../css/o/o0b4pebtm.css';
import '../../css/f/f5c3eyb3x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGXu9xTb5x" x1="237.111" x2="166.193" y1="288.129" y2="60.179" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="v9u8nhb5n"/></linearGradient><path fill="url(#SVGXu9xTb5x)" class="jyg6q1bpv"/><path class="o0b4pebtm"/><path class="f5c3eyb3x"/>`,
		"fallback": "selfhst:microsoft-power-automate-dark",
	});
}

export default Component;
