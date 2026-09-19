import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcn-pab0o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcn-pab0o"/>`,
		"fallback": "whh:sad",
	});
}

export default Component;
