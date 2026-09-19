import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9_8gbccn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9_8gbccn"/>`,
		"fallback": "carbon:scalpel",
	});
}

export default Component;
