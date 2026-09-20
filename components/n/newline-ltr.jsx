import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bifw8lj3w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bifw8lj3w"/>`,
		"fallback": "ooui:newline-ltr",
	});
}

export default Component;
