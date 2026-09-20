import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-e9sz77z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-e9sz77z"/>`,
		"fallback": "streamline-ultimate:vectors-pen-add-1-bold",
	});
}

export default Component;
