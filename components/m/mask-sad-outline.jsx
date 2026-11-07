import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkyt55e7l.css';
import '../../css/y/y5tqvubvr.css';
import '../../css/h/h3-zd5pqb.css';
import '../../css/d/dlmz-512n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkyt55e7l"/><path class="y5tqvubvr"/><path clip-rule="evenodd" class="h3-zd5pqb"/><path class="dlmz-512n"/>`,
		"fallback": "solar:mask-sad-outline",
	});
}

export default Component;
