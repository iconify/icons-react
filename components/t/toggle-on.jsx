import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7m7n-bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7m7n-bzf"/>`,
		"fallback": "uit:toggle-on",
	});
}

export default Component;
