import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wlttq6b8t.css';
import '../../css/c/cwwjfacik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="wlttq6b8t"/><path class="cwwjfacik"/></g>`,
		"fallback": "keyline-icons:umbrella-sharp-fill",
	});
}

export default Component;
