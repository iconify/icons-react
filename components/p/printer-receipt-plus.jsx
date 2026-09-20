import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud03u3b6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud03u3b6l"/>`,
		"fallback": "mdi:printer-receipt-plus",
	});
}

export default Component;
