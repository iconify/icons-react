import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5jhruhbp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5jhruhbp"/>`,
		"fallback": "whh:pluspages",
	});
}

export default Component;
