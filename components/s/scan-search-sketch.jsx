import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u-b_b7bce.css';
import '../../css/v/vbr8th6tj.css';
import '../../css/w/wchmfjfsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u-b_b7bce wm-deco"/><path class="vbr8th6tj wm-k"/><path class="wchmfjfsw wm-a"/></g>`,
		"fallback": "withicons:scan-search-sketch",
	});
}

export default Component;
