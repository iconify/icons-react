import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjyi8psyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sjyi8psyq"/>`,
		"fallback": "solar:notebook-square-bold",
	});
}

export default Component;
