import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqp7m7dfo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqp7m7dfo"/>`,
		"fallback": "famicons:shield-half-sharp",
	});
}

export default Component;
