import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ieqne-uup.css';
import '../../css/q/q73-lebvq.css';
import '../../css/d/d1y700bwp.css';
import '../../css/c/cj91917ct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ieqne-uup wm-shadow"/><path class="q73-lebvq"/><path class="d1y700bwp"/><path class="cj91917ct"/></g>`,
		"fallback": "withicons-retro:wand",
	});
}

export default Component;
