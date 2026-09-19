import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uaa9nsvjs.css';
import '../../css/g/gqwo3_boc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uaa9nsvjs"/><path class="gqwo3_boc"/></g>`,
		"fallback": "glyphs-poly:quote-single",
	});
}

export default Component;
