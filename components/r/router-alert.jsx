import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfc6r4b4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfc6r4b4q"/>`,
		"fallback": "noviair:router-alert",
	});
}

export default Component;
