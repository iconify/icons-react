import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wh23rikns.css';
import '../../css/v/vrsk0szsg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wh23rikns"/><path class="vrsk0szsg"/></g>`,
		"fallback": "glyphs:users-1",
	});
}

export default Component;
