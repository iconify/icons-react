import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxsbrmb-c.css';
import '../../css/s/si35nob4w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vxsbrmb-c"/><path clip-rule="evenodd" class="si35nob4w"/></g>`,
		"fallback": "glyphs:signal-50-bold",
	});
}

export default Component;
