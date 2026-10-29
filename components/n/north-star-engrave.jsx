import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kafw2jbbs.css';
import '../../css/b/b6p07tn5i.css';
import '../../css/z/zib8m2_fq.css';
import '../../css/e/eacle5s9s.css';
import '../../css/u/u0km1qbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kafw2jbbs wm-k"/><path class="b6p07tn5i wm-a"/><path class="wm-shadow zib8m2_fq"/><path class="eacle5s9s wm-k"/><path class="u0km1qbun wm-a"/></g>`,
		"fallback": "withicons:north-star-engrave",
	});
}

export default Component;
