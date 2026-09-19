import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp803d-2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp803d-2h"/>`,
		"fallback": "griddy-icons:loyalty-card-barcode-filled",
	});
}

export default Component;
