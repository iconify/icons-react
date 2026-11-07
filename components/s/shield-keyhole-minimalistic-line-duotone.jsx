import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/noff7ob6h.css';
import '../../css/k/kfclpjb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="noff7ob6h"/><path class="kfclpjb6w"/></g>`,
		"fallback": "solar:shield-keyhole-minimalistic-line-duotone",
	});
}

export default Component;
