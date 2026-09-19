import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqz3u-bid.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqz3u-bid"/>`,
		"fallback": "fa7-solid:square-root-variable",
	});
}

export default Component;
