import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu1h-6bqk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu1h-6bqk"/>`,
		"fallback": "whh:scales",
	});
}

export default Component;
