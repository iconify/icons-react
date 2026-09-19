import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o8k0k3bla.css';
import '../../css/w/wnley4fnf.css';
import '../../css/l/lu_0-xpbb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o8k0k3bla"/><path class="wnley4fnf"/><path clip-rule="evenodd" class="lu_0-xpbb"/></g>`,
		"fallback": "glyphs-poly:layer-backward",
	});
}

export default Component;
