import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nrmhn5yem.css';
import '../../css/o/okvols-1e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nrmhn5yem"/><path class="okvols-1e"/></g>`,
		"fallback": "glyphs:signal-3-duo",
	});
}

export default Component;
