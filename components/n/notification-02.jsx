import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/muzo2ibhl.css';
import '../../css/y/yjpa273dk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="muzo2ibhl"/><path class="yjpa273dk"/></g>`,
		"fallback": "hugeicons:notification-02",
	});
}

export default Component;
