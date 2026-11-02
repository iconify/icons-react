import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrre46b4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrre46b4j"/>`,
		"fallback": "mingcute:list-chevrons-up-down-fill",
	});
}

export default Component;
