import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by6m3gbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by6m3gbjv"/>`,
		"fallback": "mdi:utensils-variant",
	});
}

export default Component;
