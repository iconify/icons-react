import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bp52pyb7w.css';
import '../../css/b/bjfx3cb5v.css';
import '../../css/g/ggo73fn2o.css';
import '../../css/i/i9o_2wdta.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bp52pyb7w"/><path clip-rule="evenodd" class="bjfx3cb5v"/><path class="ggo73fn2o"/><path clip-rule="evenodd" class="i9o_2wdta"/></g>`,
		"fallback": "glyphs:search-1-tint-outline",
	});
}

export default Component;
