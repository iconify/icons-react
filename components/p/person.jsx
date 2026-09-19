import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wu5mj21vp.css';
import '../../css/v/v8a78x2hg.css';
import '../../css/u/us0h-wb9l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wu5mj21vp"/><path class="v8a78x2hg"/><path class="us0h-wb9l"/></g>`,
		"fallback": "glyphs-poly:person",
	});
}

export default Component;
