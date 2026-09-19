import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d75b1zbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d75b1zbvv"/>`,
		"fallback": "circum:minimize-1",
	});
}

export default Component;
