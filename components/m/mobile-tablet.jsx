import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z2gq6keiz.css';
import '../../css/m/m4thh9_4l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="z2gq6keiz"/><path class="m4thh9_4l"/></g>`,
		"fallback": "glyphs:mobile-tablet",
	});
}

export default Component;
