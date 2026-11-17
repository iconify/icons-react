import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wfsf9hbwi.css';
import '../../css/m/mhx2flpsr.css';
import '../../css/c/c3u021bbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="wfsf9hbwi"/><path class="mhx2flpsr"/><path class="c3u021bbk"/></g>`,
		"fallback": "matita:mail-check",
	});
}

export default Component;
