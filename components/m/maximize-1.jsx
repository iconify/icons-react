import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m09wixb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m09wixb9b"/>`,
		"fallback": "circum:maximize-1",
	});
}

export default Component;
