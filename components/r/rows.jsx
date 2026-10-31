import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/i/ibtq3f5qv.css';
import '../../css/x/xmaxb8bmg.css';
import '../../css/v/vqwnr0bfy.css';
import '../../css/u/usaqtc2si.css';
import '../../css/u/u2wr3d_br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="ibtq3f5qv"/><path class="xmaxb8bmg"/><path class="vqwnr0bfy"/><path class="usaqtc2si"/><path class="u2wr3d_br"/></g>`,
		"fallback": "withicons-retro:rows",
	});
}

export default Component;
