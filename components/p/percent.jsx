import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_txgkbzw.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_txgkbzw"/>`,
		"fallback": "fa-solid:percent",
	});
}

export default Component;
