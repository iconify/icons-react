import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm7h6xalq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm7h6xalq"/>`,
		"fallback": "mingcute:parking-lights-line",
	});
}

export default Component;
