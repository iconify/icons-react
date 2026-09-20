import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er_fc8b5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er_fc8b5y"/>`,
		"fallback": "mdi:sort-variant-remove",
	});
}

export default Component;
