import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o-2ja8zjz.css';
import '../../css/a/aeb7ubc3o.css';
import '../../css/n/nasr13rxj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o-2ja8zjz"/><path class="aeb7ubc3o"/><path class="nasr13rxj"/></g>`,
		"fallback": "glyphs-poly:volume-1",
	});
}

export default Component;
