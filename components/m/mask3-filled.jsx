import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q30fo1bcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q30fo1bcu"/>`,
		"fallback": "reicon:mask3-filled",
	});
}

export default Component;
