import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjo891b4d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjo891b4d"/>`,
		"fallback": "icon-park-outline:monitor-two",
	});
}

export default Component;
