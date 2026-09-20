import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hho220g3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hho220g3f"/>`,
		"fallback": "mingcute:scooter-fill",
	});
}

export default Component;
