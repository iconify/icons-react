import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vniukobab.css';
import '../../css/u/uae7cybxi.css';
import '../../css/k/kduupxbxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vniukobab"/><path class="uae7cybxi"/><path class="kduupxbxa"/></g>`,
		"fallback": "majesticons:scroll-text",
	});
}

export default Component;
