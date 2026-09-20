import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pel4bdbze.css';
import '../../css/s/s-xpk0xxq.css';
import '../../css/a/axh_y-hbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pel4bdbze"/><path class="s-xpk0xxq"/><path class="axh_y-hbe"/></g>`,
		"fallback": "keyline-icons:test-tube-diagonal-sharp-duotone",
	});
}

export default Component;
