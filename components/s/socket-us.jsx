import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah-cd359b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah-cd359b"/>`,
		"fallback": "cbi:socket-us",
	});
}

export default Component;
