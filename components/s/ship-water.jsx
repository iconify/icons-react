import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oipwwixjl.css';
import '../../css/r/rld6-3fnq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="oipwwixjl"/><path class="rld6-3fnq"/></g>`,
		"fallback": "glyphs:ship-water",
	});
}

export default Component;
