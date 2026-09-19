import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znc5qpb0i.css';
import '../../css/g/gtme-aczt.css';
import '../../css/c/c_rcshbhc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="znc5qpb0i"/><path clip-rule="evenodd" class="gtme-aczt"/><path class="c_rcshbhc"/></g>`,
		"fallback": "glyphs-poly:loveseat",
	});
}

export default Component;
