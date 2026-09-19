import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcoda5bjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcoda5bjf"/>`,
		"fallback": "griddy-icons:send-filled",
	});
}

export default Component;
