import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd-f8lbjr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qd-f8lbjr"/>`,
		"fallback": "heroicons:percent-badge-20-solid",
	});
}

export default Component;
