import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qqv465xel.css';
import '../../css/o/owxkxyber.css';
import '../../css/x/x67f91aiq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qqv465xel"/><path class="owxkxyber"/><path class="x67f91aiq"/></g>`,
		"fallback": "glyphs-poly:toggle-1",
	});
}

export default Component;
