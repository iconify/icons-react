import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d71i_qbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d71i_qbji"/>`,
		"fallback": "reicon:ticket-discount-filled",
	});
}

export default Component;
