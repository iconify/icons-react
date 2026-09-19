import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybjb7-_9i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ybjb7-_9i"/>`,
		"fallback": "healthicons:man-outline",
	});
}

export default Component;
