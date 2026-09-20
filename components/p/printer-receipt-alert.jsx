import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmufk39sd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmufk39sd"/>`,
		"fallback": "mdi:printer-receipt-alert",
	});
}

export default Component;
