import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj3gkuzfe.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qr_-isbgg.css';
import '../../css/c/c5__r9abd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj3gkuzfe secondary"/><g class="dt0cm9dhy primary"><path class="qr_-isbgg"/><path class="c5__r9abd"/></g>`,
		"fallback": "iconaut:notebook-duo",
	});
}

export default Component;
