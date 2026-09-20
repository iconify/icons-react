import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/niyrnkbpv.css';
import '../../css/e/e38sh3bgm.css';
import '../../css/x/xzyzuublu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="niyrnkbpv"/><path class="e38sh3bgm"/><path class="xzyzuublu"/></g>`,
		"fallback": "streamline-logos:protonmail-logo-1",
	});
}

export default Component;
