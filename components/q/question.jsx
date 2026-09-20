import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm0ouabjo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm0ouabjo"/>`,
		"fallback": "raphael:question",
	});
}

export default Component;
