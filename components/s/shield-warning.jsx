import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba8wc7b-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba8wc7b-t"/>`,
		"fallback": "mdi:shield-warning",
	});
}

export default Component;
