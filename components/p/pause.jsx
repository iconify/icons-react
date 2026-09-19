import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfz61wbip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfz61wbip"/>`,
		"fallback": "heroicons-outline:pause",
	});
}

export default Component;
