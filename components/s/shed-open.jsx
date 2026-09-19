import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhomdjb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhomdjb0w"/>`,
		"fallback": "cbi:shed-open",
	});
}

export default Component;
