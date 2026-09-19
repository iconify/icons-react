import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f104uvbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f104uvbqj"/>`,
		"fallback": "cbi:ring-floodlight",
	});
}

export default Component;
