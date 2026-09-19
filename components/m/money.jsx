import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqdqp0n7w.css';

const viewBox = {"width":224,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqdqp0n7w"/>`,
		"fallback": "zmdi:money",
	});
}

export default Component;
