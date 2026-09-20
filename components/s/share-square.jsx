import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg97eobzd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg97eobzd"/>`,
		"fallback": "la:share-square",
	});
}

export default Component;
