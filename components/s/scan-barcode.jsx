import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tib1-l6ty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tib1-l6ty"/>`,
		"fallback": "lucide:scan-barcode",
	});
}

export default Component;
