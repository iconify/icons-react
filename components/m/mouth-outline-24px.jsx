import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4cutgq5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h4cutgq5q"/>`,
		"fallback": "healthicons:mouth-outline-24px",
	});
}

export default Component;
