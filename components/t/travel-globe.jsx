import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh7c1-bqo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sh7c1-bqo"/>`,
		"fallback": "streamline-block:travel-globe",
	});
}

export default Component;
