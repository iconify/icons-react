import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tso6gqw6r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tso6gqw6r"/>`,
		"fallback": "garden:share-stroke-20",
	});
}

export default Component;
