import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j01r4uprb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j01r4uprb"/>`,
		"fallback": "solar:share-outline",
	});
}

export default Component;
