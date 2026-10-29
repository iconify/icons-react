import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hnkx8qb-r.css';
import '../../css/f/fb-ay-bql.css';
import '../../css/s/slrghbbxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hnkx8qb-r wm-k"/><path class="fb-ay-bql wm-k"/><path class="slrghbbxr wm-a"/></g>`,
		"fallback": "withicons:minimize-sketch",
	});
}

export default Component;
