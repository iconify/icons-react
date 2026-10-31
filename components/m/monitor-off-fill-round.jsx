import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz4e8gbjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz4e8gbjh"/>`,
		"fallback": "coolicons:monitor-off-fill-round",
	});
}

export default Component;
