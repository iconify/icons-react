import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxp4o7b8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxp4o7b8l"/>`,
		"fallback": "coolicons:presentation-round",
	});
}

export default Component;
