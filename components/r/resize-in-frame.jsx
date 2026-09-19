import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cjsa-2bpy.css';
import '../../css/d/d-ncrxbbo.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cjsa-2bpy"/><path class="d-ncrxbbo"/></g>`,
		"fallback": "si-glyph:resize-in-frame",
	});
}

export default Component;
