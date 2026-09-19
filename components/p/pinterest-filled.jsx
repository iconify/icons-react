import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhj72hbts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhj72hbts"/>`,
		"fallback": "griddy-icons:pinterest-filled",
	});
}

export default Component;
