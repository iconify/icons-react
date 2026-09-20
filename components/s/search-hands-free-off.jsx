import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-53p7byk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-53p7byk"/>`,
		"fallback": "mdi:search-hands-free-off",
	});
}

export default Component;
