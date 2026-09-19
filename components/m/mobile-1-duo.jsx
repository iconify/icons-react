import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/newm-gbuf.css';
import '../../css/b/bypxl4b2a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="newm-gbuf"/><path class="bypxl4b2a"/></g>`,
		"fallback": "glyphs:mobile-1-duo",
	});
}

export default Component;
