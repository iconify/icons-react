import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hjux57bau.css';
import '../../css/i/ie6yhb-fk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="hjux57bau"/><path vector-effect="non-scaling-stroke" class="ie6yhb-fk"/></g>`,
		"fallback": "wordpress:time-to-read",
	});
}

export default Component;
