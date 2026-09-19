import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfz8j7b5l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfz8j7b5l"/>`,
		"fallback": "fa7-solid:suitcase-rolling",
	});
}

export default Component;
