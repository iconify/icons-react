import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/c/c_uqw-qjh.css';
import '../../css/c/cfl3_9b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="c_uqw-qjh"/><path class="cfl3_9b4r"/></g>`,
		"fallback": "solar:video-frame-play-vertical-line-duotone",
	});
}

export default Component;
