import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwz9-f8wt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwz9-f8wt"/>`,
		"fallback": "mdi:share-variant-outline",
	});
}

export default Component;
