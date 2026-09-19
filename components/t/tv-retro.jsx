import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dn5u3dbol.css';
import '../../css/o/obvssib-t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dn5u3dbol"/><path class="obvssib-t"/></g>`,
		"fallback": "glyphs:tv-retro",
	});
}

export default Component;
