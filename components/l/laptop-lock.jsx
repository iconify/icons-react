import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shijetb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shijetb6c"/>`,
		"fallback": "noviair-light:laptop-lock",
	});
}

export default Component;
