import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0oyi7b4l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0oyi7b4l"/>`,
		"fallback": "bi:plus-circle-dotted",
	});
}

export default Component;
