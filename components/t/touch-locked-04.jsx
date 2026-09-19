import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aesvddc0d.css';
import '../../css/o/ol0nnwgrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="aesvddc0d"/><path class="ol0nnwgrc"/></g>`,
		"fallback": "hugeicons:touch-locked-04",
	});
}

export default Component;
