import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f91v1qb7y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f91v1qb7y"/>`,
		"fallback": "octicon:typography-16",
	});
}

export default Component;
