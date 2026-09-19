import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eddsisw-b.css';

const viewBox = {"width":1024,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eddsisw-b"/>`,
		"fallback": "fa:italic",
	});
}

export default Component;
