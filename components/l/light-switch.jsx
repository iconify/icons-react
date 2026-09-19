import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/crrxhachs.css';
import '../../css/j/jd7evcysz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="crrxhachs"/><path class="jd7evcysz"/></g>`,
		"fallback": "glyphs:light-switch",
	});
}

export default Component;
