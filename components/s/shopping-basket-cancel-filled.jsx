import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sowc0zb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sowc0zb9b"/>`,
		"fallback": "griddy-icons:shopping-basket-cancel-filled",
	});
}

export default Component;
