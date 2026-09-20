import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu-nrmb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu-nrmb7t"/>`,
		"fallback": "mdi:paper-plane",
	});
}

export default Component;
