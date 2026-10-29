import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/luvu58brr.css';
import '../../css/l/l4ok05b1o.css';
import '../../css/b/b55os-lyu.css';
import '../../css/b/bkk0xnbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="luvu58brr"/><path class="l4ok05b1o wm-a"/><path class="b55os-lyu"/><path class="bkk0xnbka"/></g>`,
		"fallback": "withicons:newspaper-duo",
	});
}

export default Component;
