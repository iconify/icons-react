import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1f6iwq3z.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1f6iwq3z"/>`,
		"fallback": "simple-line-icons:speech",
	});
}

export default Component;
