import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpehaf3is.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qpehaf3is"/>`,
		"fallback": "streamline-block:travel-bus",
	});
}

export default Component;
