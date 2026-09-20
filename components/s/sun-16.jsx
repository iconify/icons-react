import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my3xg5x8j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my3xg5x8j"/>`,
		"fallback": "octicon:sun-16",
	});
}

export default Component;
