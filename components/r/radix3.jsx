import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jv28q8e_k.css';
import '../../css/t/txb6zsb2i.css';
import '../../css/d/dz4lf4bty.css';
import '../../css/e/e8a0pbj-n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jv28q8e_k"/><path class="txb6zsb2i"/><path class="dz4lf4bty"/><path class="e8a0pbj-n"/></g>`,
		"fallback": "unjs:radix3",
	});
}

export default Component;
