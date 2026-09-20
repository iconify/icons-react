import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehw2eab2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ehw2eab2m"/>`,
		"fallback": "solar:sort-by-time-outline",
	});
}

export default Component;
