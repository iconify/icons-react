import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kem-rcb_x.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG9pcnZPUV" class="kem-rcb_x"/></defs><use href="#SVG9pcnZPUV" transform="translate(42.667 53.333)" class="d2kvgvbvc"/>`,
		"fallback": "ix:pen-filled",
	});
}

export default Component;
