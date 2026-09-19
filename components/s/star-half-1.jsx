import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-70sba8t.css';
import '../../css/d/d2zbbb4nw.css';
import '../../css/m/mo1pfhmuv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-70sba8t"/><path clip-rule="evenodd" class="d2zbbb4nw"/><path clip-rule="evenodd" class="mo1pfhmuv"/></g>`,
		"fallback": "glyphs-poly:star-half-1",
	});
}

export default Component;
