import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjthz755z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjthz755z"/>`,
		"fallback": "subway:lock",
	});
}

export default Component;
