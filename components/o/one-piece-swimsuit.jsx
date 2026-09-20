import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6vylkbxi.css';
import '../../css/g/g9spk5brk.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/z/zp-tryb2x.css';
import '../../css/h/h9f382bvk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6vylkbxi"/><path class="g9spk5brk"/><g class="jn8qy4bru"><path class="zp-tryb2x"/><path class="h9f382bvk"/></g>`,
		"fallback": "openmoji:one-piece-swimsuit",
	});
}

export default Component;
