import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdcpq_b6v.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdcpq_b6v"/>`,
		"fallback": "fa7-solid:quote-left-alt",
	});
}

export default Component;
