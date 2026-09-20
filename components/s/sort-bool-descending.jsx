import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhdbi7b9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhdbi7b9p"/>`,
		"fallback": "mdi:sort-bool-descending",
	});
}

export default Component;
