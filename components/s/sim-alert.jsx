import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vww7f4bcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vww7f4bcv"/>`,
		"fallback": "mdi-light:sim-alert",
	});
}

export default Component;
