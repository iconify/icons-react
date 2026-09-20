import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rwon19h1w.css';
import '../../css/c/cgl2m5s9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rwon19h1w"/><path vector-effect="non-scaling-stroke" class="cgl2m5s9b"/></g>`,
		"fallback": "wordpress:justify-stretch-vertical",
	});
}

export default Component;
