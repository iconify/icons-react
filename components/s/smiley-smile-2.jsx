import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huogh35_q.css';
import '../../css/d/d_3u0kb9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huogh35_q"/><path class="d_3u0kb9m"/>`,
		"fallback": "streamline-freehand:smiley-smile-2",
	});
}

export default Component;
