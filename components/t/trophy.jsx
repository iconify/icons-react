import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l94dbb61v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l94dbb61v"/>`,
		"fallback": "noviair-light:trophy",
	});
}

export default Component;
