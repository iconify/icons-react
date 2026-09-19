import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epntsf3uw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epntsf3uw"/>`,
		"fallback": "fa7-solid:venus",
	});
}

export default Component;
