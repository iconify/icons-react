import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rurq22b5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rurq22b5z"/>`,
		"fallback": "mynaui:lock-open-keyhole-solid",
	});
}

export default Component;
