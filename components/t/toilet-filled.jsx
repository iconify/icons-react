import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyep9hjio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lyep9hjio"/>`,
		"fallback": "griddy-icons:toilet-filled",
	});
}

export default Component;
