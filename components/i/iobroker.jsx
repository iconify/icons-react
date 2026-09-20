import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b44k8z_9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b44k8z_9l"/>`,
		"fallback": "simple-icons:iobroker",
	});
}

export default Component;
