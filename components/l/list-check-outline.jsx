import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_cz6xddp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y_cz6xddp"/>`,
		"fallback": "solar:list-check-outline",
	});
}

export default Component;
