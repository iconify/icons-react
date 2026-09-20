import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j57f-3ujj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j57f-3ujj"/>`,
		"fallback": "mdi:nintendo-wiiu",
	});
}

export default Component;
