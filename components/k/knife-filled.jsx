import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytcuhdbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytcuhdbhb"/>`,
		"fallback": "griddy-icons:knife-filled",
	});
}

export default Component;
