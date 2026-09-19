import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/myu9avgru.css';
import '../../css/u/umtr24biu.css';
import '../../css/s/sq84s46_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="myu9avgru"/><path class="umtr24biu"/><path class="sq84s46_s"/></g>`,
		"fallback": "hugeicons:thermometer",
	});
}

export default Component;
