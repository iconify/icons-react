import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x3x1-fbdv.css';
import '../../css/g/gkud_qdlx.css';
import '../../css/o/ozst3gb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x3x1-fbdv"/><path class="gkud_qdlx"/><circle transform="rotate(-45 8.607 8.879)" class="ozst3gb1r"/></g>`,
		"fallback": "solar:tag-price-line-duotone",
	});
}

export default Component;
