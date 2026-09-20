import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rylg1bu5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rylg1bu5q"/>`,
		"fallback": "simple-icons:vinted",
	});
}

export default Component;
