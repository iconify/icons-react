import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di-rr7o5e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di-rr7o5e"/>`,
		"fallback": "streamline:volume-off",
	});
}

export default Component;
