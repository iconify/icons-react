import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8plzgb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8plzgb1k"/>`,
		"fallback": "mdi:number-6-box-outline",
	});
}

export default Component;
