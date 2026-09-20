import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj104obcf.css';
import '../../css/v/vl1l4y1nm.css';
import '../../css/f/f0k7erb4e.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/v/v1xwazb_z.css';
import '../../css/f/feu_fzf4q.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse transform="rotate(-45 35.976 36.145)" class="zj104obcf"/><path class="vl1l4y1nm"/><path class="f0k7erb4e"/><g class="x8poo_bjf"><ellipse transform="rotate(-45 35.976 36.145)" class="v1xwazb_z"/><path class="feu_fzf4q"/></g>`,
		"fallback": "openmoji:olive",
	});
}

export default Component;
