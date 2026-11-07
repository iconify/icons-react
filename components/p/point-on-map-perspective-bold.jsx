import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8cq6cc5u.css';
import '../../css/m/mjdmcab3w.css';
import '../../css/t/tq7go-bpr.css';
import '../../css/d/dld29ukqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8cq6cc5u"/><path class="mjdmcab3w"/><path class="tq7go-bpr"/><path class="dld29ukqd"/>`,
		"fallback": "solar:point-on-map-perspective-bold",
	});
}

export default Component;
