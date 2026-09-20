import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqqtj5ncr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqqtj5ncr"/>`,
		"fallback": "raphael:photo",
	});
}

export default Component;
