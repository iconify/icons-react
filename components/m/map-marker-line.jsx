import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j8nz_-xml.css';
import '../../css/r/room0z6_d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j8nz_-xml"/><path class="room0z6_d"/></g>`,
		"fallback": "glyphs:map-marker-line",
	});
}

export default Component;
