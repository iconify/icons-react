import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uww47e16f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uww47e16f"/>`,
		"fallback": "griddy-icons:send-alt-02-filled",
	});
}

export default Component;
