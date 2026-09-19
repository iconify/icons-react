import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rw804nbpl.css';
import '../../css/g/gxedkvunq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rw804nbpl"/><path class="gxedkvunq"/></g>`,
		"fallback": "glyphs:route-duo",
	});
}

export default Component;
