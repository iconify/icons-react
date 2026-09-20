import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he-8tqz-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he-8tqz-h"/>`,
		"fallback": "mdi:vuejs",
	});
}

export default Component;
