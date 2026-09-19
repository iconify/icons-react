import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rxsgghlkl.css';
import '../../css/v/vaz2m4b1u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="rxsgghlkl"/><path class="vaz2m4b1u"/></g>`,
		"fallback": "glyphs:loveseat",
	});
}

export default Component;
