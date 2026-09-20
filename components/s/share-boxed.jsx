import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-ul5rahn.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-ul5rahn"/>`,
		"fallback": "oi:share-boxed",
	});
}

export default Component;
