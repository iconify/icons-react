import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgowrvd1x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgowrvd1x"/>`,
		"fallback": "streamline:money-cashier-bar-code-codes-tags-upc-barcode",
	});
}

export default Component;
