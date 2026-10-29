import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sui2dub7k.css';
import '../../css/m/mjzx30xzu.css';
import '../../css/l/lqb931lgw.css';
import '../../css/h/hlw3r33xs.css';
import '../../css/y/yjt7y95ow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sui2dub7k wm-k"/><path class="mjzx30xzu wm-a"/><path class="lqb931lgw wm-shadow"/><path class="hlw3r33xs wm-k"/><path class="wm-a yjt7y95ow"/></g>`,
		"fallback": "withicons:potted-plant-engrave",
	});
}

export default Component;
