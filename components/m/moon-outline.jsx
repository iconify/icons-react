import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tbma_fb-c.css';
import '../../css/g/g-2to_bvz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tbma_fb-c"/><path class="g-2to_bvz"/></g>`,
		"fallback": "glyphs:moon-outline",
	});
}

export default Component;
