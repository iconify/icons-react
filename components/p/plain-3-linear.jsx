import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tnvxegb0h.css';
import '../../css/z/znx4c__em.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tnvxegb0h"/><path class="znx4c__em"/></g>`,
		"fallback": "solar:plain-3-linear",
	});
}

export default Component;
