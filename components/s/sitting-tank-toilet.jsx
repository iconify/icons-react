import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iokv6hbdq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iokv6hbdq"/>`,
		"fallback": "pinhead:sitting-tank-toilet",
	});
}

export default Component;
