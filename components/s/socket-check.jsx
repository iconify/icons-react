import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g59sbscng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g59sbscng"/>`,
		"fallback": "noviair-light:socket-check",
	});
}

export default Component;
