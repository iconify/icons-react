import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/deia9eb9b.css';
import '../../css/p/p4hny8b2l.css';
import '../../css/b/bup-tl2ej.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="deia9eb9b"/><path class="p4hny8b2l"/><path class="bup-tl2ej"/></g>`,
		"fallback": "glyphs:rain-duo",
	});
}

export default Component;
