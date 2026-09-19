import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cqkwjubwu.css';
import '../../css/w/wxcfl7hpm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cqkwjubwu"/><path class="wxcfl7hpm"/></g>`,
		"fallback": "glyphs:ruler-trinangle",
	});
}

export default Component;
