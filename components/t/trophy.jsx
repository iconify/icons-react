import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/udzhelkrh.css';
import '../../css/g/gxhqlxl9u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="udzhelkrh"/><path class="gxhqlxl9u"/></g>`,
		"fallback": "glyphs:trophy",
	});
}

export default Component;
