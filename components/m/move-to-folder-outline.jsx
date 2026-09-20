import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9q7t8bca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u9q7t8bca"/>`,
		"fallback": "solar:move-to-folder-outline",
	});
}

export default Component;
