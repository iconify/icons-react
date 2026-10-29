import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/y4pkjtbjs.css';
import '../../css/i/ibpnj1b4u.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/j/jlv0b8x4n.css';
import '../../css/w/wod2x8bdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco y4pkjtbjs"/><path class="ibpnj1b4u wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="jlv0b8x4n"/><path class="wod2x8bdi"/></g>`,
		"fallback": "withicons:kite-blueprint",
	});
}

export default Component;
