import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne8y8bu0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne8y8bu0d"/>`,
		"fallback": "griddy-icons:scalpel-filled",
	});
}

export default Component;
