import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns8ydacjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ns8ydacjd"/>`,
		"fallback": "solar:suitcase-lines-outline",
	});
}

export default Component;
