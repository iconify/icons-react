import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt4poo8_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt4poo8_n"/>`,
		"fallback": "heroicons-outline:view-grid",
	});
}

export default Component;
