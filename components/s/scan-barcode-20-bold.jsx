import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwl-lb6rd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwl-lb6rd"/>`,
		"fallback": "energy-icons:scan-barcode-20-bold",
	});
}

export default Component;
