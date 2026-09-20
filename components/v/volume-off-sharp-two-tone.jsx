import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jus-9cble.css';
import '../../css/r/r0fzdm12c.css';
import '../../css/l/l18eabbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="jus-9cble"/><path class="r0fzdm12c"/><path class="l18eabbfs"/></g>`,
		"fallback": "keyline-icons:volume-off-sharp-two-tone",
	});
}

export default Component;
