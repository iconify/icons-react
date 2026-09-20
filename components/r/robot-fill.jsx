import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hca5gjt6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hca5gjt6i"/>`,
		"fallback": "mingcute:robot-fill",
	});
}

export default Component;
