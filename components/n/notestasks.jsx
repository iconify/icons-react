import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy9s2vbhu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy9s2vbhu"/>`,
		"fallback": "whh:notestasks",
	});
}

export default Component;
