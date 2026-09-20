import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpto0rw_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpto0rw_a"/>`,
		"fallback": "mdi:jsfiddle",
	});
}

export default Component;
