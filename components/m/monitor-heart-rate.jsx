import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xywstjb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xywstjb0w"/>`,
		"fallback": "uil:monitor-heart-rate",
	});
}

export default Component;
