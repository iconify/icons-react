import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/a/aggfmrber.css';
import '../../css/s/sp83kew7g.css';
import '../../css/z/z477shbwi.css';
import '../../css/b/bmu-9gb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGMq6W9bMn" x1="10" x2="14" y1="2.51" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="aggfmrber wm-k"/><path class="sp83kew7g wm-deco"/><path fill="url(#SVGMq6W9bMn)" class="wm-k z477shbwi"/><path class="bmu-9gb0f wm-shadow"/></g>`,
		"fallback": "withicons-valentine:minimize",
	});
}

export default Component;
