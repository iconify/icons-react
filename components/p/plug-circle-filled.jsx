import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9hdb2ygu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9hdb2ygu"/>`,
		"fallback": "reicon:plug-circle-filled",
	});
}

export default Component;
