import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fx_ggjqiy.css';
import '../../css/w/wqy3-lbbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fx_ggjqiy"/><path class="wqy3-lbbu"/></g>`,
		"fallback": "lets-icons:scan-alt",
	});
}

export default Component;
