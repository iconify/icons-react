import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw7aaducw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw7aaducw"/>`,
		"fallback": "mdi:invoice-line-items",
	});
}

export default Component;
