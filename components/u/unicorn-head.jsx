import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr-kymbty.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr-kymbty"/>`,
		"fallback": "pinhead:unicorn-head",
	});
}

export default Component;
