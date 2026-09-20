import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5s6svbej.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5s6svbej"/>`,
		"fallback": "ix:p-i-diagram",
	});
}

export default Component;
