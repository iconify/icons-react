import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4n8njb4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4n8njb4c"/>`,
		"fallback": "mdi:language-typescript",
	});
}

export default Component;
