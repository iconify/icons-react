import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oki7nw3lq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oki7nw3lq"/>`,
		"fallback": "mynaui:luggage-solid",
	});
}

export default Component;
