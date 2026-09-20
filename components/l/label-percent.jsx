import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqo6g6brk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqo6g6brk"/>`,
		"fallback": "mdi:label-percent",
	});
}

export default Component;
