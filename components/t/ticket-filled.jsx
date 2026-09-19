import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wap7h8uas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wap7h8uas"/>`,
		"fallback": "griddy-icons:ticket-filled",
	});
}

export default Component;
