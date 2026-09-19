import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0te34bar.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0te34bar"/>`,
		"fallback": "fa:share-square",
	});
}

export default Component;
