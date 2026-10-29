import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ym3gbriop.css';
import '../../css/v/vxxiu3xum.css';
import '../../css/b/b59hop-tj.css';
import '../../css/l/lm0z5rb3y.css';
import '../../css/h/h97q_qbxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ym3gbriop"/><path class="vxxiu3xum wm-k"/><path class="b59hop-tj wm-k"/><path class="lm0z5rb3y wm-a"/><path class="h97q_qbxt wm-a"/></g>`,
		"fallback": "withicons:ungroup-sketch",
	});
}

export default Component;
