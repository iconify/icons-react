import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tqtr5kbxv.css';
import '../../css/d/d90u91b9f.css';
import '../../css/k/k0vdysbtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tqtr5kbxv"/><path class="d90u91b9f"/><path class="k0vdysbtw"/></g>`,
		"fallback": "hugeicons:prayer-rug-01",
	});
}

export default Component;
