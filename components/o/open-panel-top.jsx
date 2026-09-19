import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whnn-4bjf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whnn-4bjf"/>`,
		"fallback": "carbon:open-panel-top",
	});
}

export default Component;
