import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpc5t2beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpc5t2beq"/>`,
		"fallback": "mdi:receipt-text-minus",
	});
}

export default Component;
