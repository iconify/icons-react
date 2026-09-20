import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol6do99bk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol6do99bk"/>`,
		"fallback": "mdi:view-split-horizontal",
	});
}

export default Component;
