import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a89hhgd0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a89hhgd0b"/>`,
		"fallback": "mdi:tally-mark-3",
	});
}

export default Component;
