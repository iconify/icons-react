import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw-jlrbbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw-jlrbbz"/>`,
		"fallback": "streamline-ultimate:pathfinder-unite",
	});
}

export default Component;
