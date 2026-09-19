import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w7o65pytz.css';
import '../../css/j/jr0fgob5d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w7o65pytz"/><path class="jr0fgob5d"/></g>`,
		"fallback": "glyphs:street-light-2",
	});
}

export default Component;
