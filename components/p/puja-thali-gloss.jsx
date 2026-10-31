import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c2_2-lkbx.css';
import '../../css/t/tln7klbcz.css';
import '../../css/f/fj46i262q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="c2_2-lkbx wm-k"/><path class="tln7klbcz wm-k"/><path class="fj46i262q wm-a"/></g>`,
		"fallback": "withicons:puja-thali-gloss",
	});
}

export default Component;
