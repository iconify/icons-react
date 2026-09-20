import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db-6pbbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db-6pbbps"/>`,
		"fallback": "material-icon-theme:lighthouse",
	});
}

export default Component;
