import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/ndaoprbix.css';
import '../../css/d/dwp5d_beg.css';
import '../../css/s/s2fz5jber.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ndaoprbix"/><path class="dwp5d_beg"/><path class="s2fz5jber"/></g>`,
		"fallback": "glyphs:scissors",
	});
}

export default Component;
