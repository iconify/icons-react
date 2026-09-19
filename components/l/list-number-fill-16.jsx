import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg3fqv7jh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg3fqv7jh"/>`,
		"fallback": "garden:list-number-fill-16",
	});
}

export default Component;
