import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qtcgw1dpv.css';
import '../../css/h/h0r5mzbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qtcgw1dpv"/><path class="h0r5mzbuw"/></g>`,
		"fallback": "streamline-sharp:login-2",
	});
}

export default Component;
