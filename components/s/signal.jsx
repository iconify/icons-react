import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsua-6n6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsua-6n6m"/>`,
		"fallback": "mdi:signal",
	});
}

export default Component;
