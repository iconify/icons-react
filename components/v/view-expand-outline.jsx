import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dbskrtmuc.css';
import '../../css/g/gk1ttumxu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dbskrtmuc"/><path class="gk1ttumxu"/></g>`,
		"fallback": "glyphs:view-expand-outline",
	});
}

export default Component;
