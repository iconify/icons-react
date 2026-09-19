import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2y66qb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p2y66qb-a"/>`,
		"fallback": "griddy-icons:user-filled",
	});
}

export default Component;
