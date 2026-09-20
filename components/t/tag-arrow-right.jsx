import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7xu0wb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7xu0wb0b"/>`,
		"fallback": "mdi:tag-arrow-right",
	});
}

export default Component;
