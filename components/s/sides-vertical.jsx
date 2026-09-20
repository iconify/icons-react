import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rwi_ciggi.css';
import '../../css/y/yt-6rsf0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="rwi_ciggi"/><path vector-effect="non-scaling-stroke" class="yt-6rsf0b"/></g>`,
		"fallback": "wordpress:sides-vertical",
	});
}

export default Component;
