import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xz0_x1byr.css';
import '../../css/r/room0z6_d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xz0_x1byr"/><path class="room0z6_d"/></g>`,
		"fallback": "glyphs:map-marker-2",
	});
}

export default Component;
