import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/ooftokbvb.css';
import '../../css/f/f7hhq4wkg.css';
import '../../css/v/vnqkk4evr.css';
import '../../css/x/xo-3mx82y.css';
import '../../css/q/qdzn02gup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ooftokbvb wm-shadow"/><path class="f7hhq4wkg"/><path class="vnqkk4evr"/><path class="xo-3mx82y"/><path class="qdzn02gup"/></g>`,
		"fallback": "withicons-retro:star-half",
	});
}

export default Component;
