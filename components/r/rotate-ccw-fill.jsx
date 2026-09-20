import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqlz9tzcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqlz9tzcy"/>`,
		"fallback": "keyline-icons:rotate-ccw-fill",
	});
}

export default Component;
