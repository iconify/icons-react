import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne18dbc6r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne18dbc6r"/>`,
		"fallback": "icon-park-outline:rotating-add",
	});
}

export default Component;
