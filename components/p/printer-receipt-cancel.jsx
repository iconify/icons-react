import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctsraib4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctsraib4g"/>`,
		"fallback": "mdi:printer-receipt-cancel",
	});
}

export default Component;
