import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueksp0b3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueksp0b3q"/>`,
		"fallback": "griddy-icons:leaf-filled",
	});
}

export default Component;
