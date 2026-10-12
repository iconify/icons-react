import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yt-usgbwg.css';
import '../../css/o/om1x-cleu.css';
import '../../css/h/hxq3r-b3c.css';
import '../../css/x/x0idx2b_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yt-usgbwg"/><circle transform="rotate(90 12 11.96)" class="om1x-cleu"/><circle transform="rotate(90 12 11.96)" class="hxq3r-b3c"/><path class="x0idx2b_y"/></g>`,
		"fallback": "andrsrxn:virus",
	});
}

export default Component;
