import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rq7f8jb8g.css';
import '../../css/q/qu4omacka.css';
import '../../css/k/kzr_fgbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rq7f8jb8g wm-k"/><path class="qu4omacka wm-k"/><path class="kzr_fgbah wm-a"/></g>`,
		"fallback": "withicons:mehndi-hand-sketch",
	});
}

export default Component;
