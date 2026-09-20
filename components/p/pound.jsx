import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucvkw0byu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucvkw0byu"/>`,
		"fallback": "roentgen:pound",
	});
}

export default Component;
