import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evarvxj2b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evarvxj2b"/>`,
		"fallback": "subway:share-1",
	});
}

export default Component;
