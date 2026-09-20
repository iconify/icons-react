import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czbd80bwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czbd80bwq"/>`,
		"fallback": "lets-icons:rename-light",
	});
}

export default Component;
