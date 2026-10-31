import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jygufhbuc.css';
import '../../css/a/a887lccaa.css';
import '../../css/y/yief2n08s.css';
import '../../css/c/cul4_8bpx.css';
import '../../css/p/pkbii5xrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jygufhbuc wm-k"/><path class="a887lccaa wm-deco"/><path class="wm-k yief2n08s"/><path class="cul4_8bpx wm-shadow"/><path class="pkbii5xrd wm-shine"/></g>`,
		"fallback": "withicons-valentine:snowflake",
	});
}

export default Component;
