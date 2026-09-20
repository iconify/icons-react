import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuw1tfb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuw1tfb0t"/>`,
		"fallback": "mdi:table-filter",
	});
}

export default Component;
