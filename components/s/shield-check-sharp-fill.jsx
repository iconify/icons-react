import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2-48nb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f2-48nb5q"/>`,
		"fallback": "keyline-icons:shield-check-sharp-fill",
	});
}

export default Component;
