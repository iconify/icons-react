import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gs5dg5bbs.css';
import '../../css/g/gh2gscb-e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gs5dg5bbs"/><path class="gh2gscb-e"/></g>`,
		"fallback": "glyphs:lock-duo",
	});
}

export default Component;
