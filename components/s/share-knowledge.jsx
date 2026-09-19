import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eivntjb8u.css';
import '../../css/b/b4cosp6fz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eivntjb8u"/><path class="b4cosp6fz"/></g>`,
		"fallback": "hugeicons:share-knowledge",
	});
}

export default Component;
