import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjb99vb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjb99vb6r"/>`,
		"fallback": "mingcute:layout-left-line",
	});
}

export default Component;
