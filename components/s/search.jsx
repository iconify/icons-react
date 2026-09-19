import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whkshnk2k.css';
import '../../css/h/hbx1wu4pc.css';
import '../../css/b/b7d5grbrs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="whkshnk2k"/><path class="hbx1wu4pc"/><path class="b7d5grbrs"/></g>`,
		"fallback": "glyphs-poly:search",
	});
}

export default Component;
