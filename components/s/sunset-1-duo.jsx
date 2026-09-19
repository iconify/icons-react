import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y2y7ucbxf.css';
import '../../css/s/sh07jntld.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y2y7ucbxf"/><path class="sh07jntld"/></g>`,
		"fallback": "glyphs:sunset-1-duo",
	});
}

export default Component;
