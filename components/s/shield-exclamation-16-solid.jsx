import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijq4veb9y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ijq4veb9y"/>`,
		"fallback": "heroicons:shield-exclamation-16-solid",
	});
}

export default Component;
