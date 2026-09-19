import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijtu-tbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijtu-tbmd"/>`,
		"fallback": "guidance:office-pod",
	});
}

export default Component;
