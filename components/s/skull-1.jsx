import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/ta2-yacwb.css';
import '../../css/h/hhs-u7byo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ta2-yacwb"/><path class="hhs-u7byo"/></g>`,
		"fallback": "glyphs:skull-1",
	});
}

export default Component;
