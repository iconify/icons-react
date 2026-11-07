import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujow3hbno.css';
import '../../css/g/g5c2p-ahz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujow3hbno"/><path class="g5c2p-ahz"/>`,
		"fallback": "solar:notification-remove-outline",
	});
}

export default Component;
