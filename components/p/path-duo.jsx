import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wltne8baa.css';
import '../../css/z/z7gpoccdb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wltne8baa"/><path class="z7gpoccdb"/></g>`,
		"fallback": "glyphs:path-duo",
	});
}

export default Component;
