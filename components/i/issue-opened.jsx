import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6f08tbsu.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6f08tbsu"/>`,
		"fallback": "octicon:issue-opened",
	});
}

export default Component;
