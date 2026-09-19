import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uceuolr2w.css';
import '../../css/r/rja0tvb5w.css';
import '../../css/b/b2diuqr2w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uceuolr2w"/><path class="rja0tvb5w"/><path class="b2diuqr2w"/></g>`,
		"fallback": "glyphs:pennant-1-bold",
	});
}

export default Component;
