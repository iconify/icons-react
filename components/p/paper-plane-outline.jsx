import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuu7943dm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuu7943dm"/>`,
		"fallback": "eva:paper-plane-outline",
	});
}

export default Component;
