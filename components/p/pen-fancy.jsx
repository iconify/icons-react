import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkdwwgbvg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkdwwgbvg"/>`,
		"fallback": "fa7-solid:pen-fancy",
	});
}

export default Component;
