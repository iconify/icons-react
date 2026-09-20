import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pojatesqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pojatesqz"/>`,
		"fallback": "ri:map-pin-add-line",
	});
}

export default Component;
