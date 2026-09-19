import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nq462kmul.css';
import '../../css/p/pjr-9bcgx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nq462kmul"/><path class="pjr-9bcgx"/></g>`,
		"fallback": "fluent-emoji-flat:pinching-hand-light",
	});
}

export default Component;
