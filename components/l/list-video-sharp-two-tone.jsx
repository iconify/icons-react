import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w54k1abtc.css';
import '../../css/w/wsr9vtbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="w54k1abtc"/><path class="wsr9vtbah"/></g>`,
		"fallback": "keyline-icons:list-video-sharp-two-tone",
	});
}

export default Component;
