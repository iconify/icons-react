import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtnihcb_h.css';
import '../../css/l/lgq_fxbzk.css';
import '../../css/p/p9ptc-gsx.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/j/j0pbotpte.css';
import '../../css/l/lcq5ssbsf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtnihcb_h"/><path class="lgq_fxbzk"/><path class="p9ptc-gsx"/><g class="jn8qy4bru"><path class="j0pbotpte"/><path class="lcq5ssbsf"/></g>`,
		"fallback": "openmoji:scroll",
	});
}

export default Component;
