import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8xkiiypj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o8xkiiypj"/>`,
		"fallback": "griddy-icons:ticket-off-alt-filled",
	});
}

export default Component;
