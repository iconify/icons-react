import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8l0pnwbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8l0pnwbw"/>`,
		"fallback": "mdi:table-row",
	});
}

export default Component;
