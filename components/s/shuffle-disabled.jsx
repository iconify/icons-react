import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i60qu5ylv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i60qu5ylv"/>`,
		"fallback": "mdi:shuffle-disabled",
	});
}

export default Component;
