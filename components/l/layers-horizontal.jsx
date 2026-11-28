import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nln0rx3xh.css';
import '../../css/i/i4ukgldfb.css';
import '../../css/m/mic-pmbmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nln0rx3xh"/><path class="i4ukgldfb"/><path class="mic-pmbmy"/></g>`,
		"fallback": "iconaut:layers-horizontal",
	});
}

export default Component;
