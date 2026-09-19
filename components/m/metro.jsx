import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va_mebb_q.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va_mebb_q"/>`,
		"fallback": "whh:metro",
	});
}

export default Component;
