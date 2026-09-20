import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy-k-4nua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy-k-4nua"/>`,
		"fallback": "mdi:search-plus-outline",
	});
}

export default Component;
