import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esa26dzqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esa26dzqj"/>`,
		"fallback": "streamline-ultimate:railroad-metro-bold",
	});
}

export default Component;
