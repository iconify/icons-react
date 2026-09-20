import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlyy_6c6s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlyy_6c6s"/>`,
		"fallback": "raphael:stopsign",
	});
}

export default Component;
