import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdu2180en.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdu2180en"/>`,
		"fallback": "pixelarticons:receipt-sharp",
	});
}

export default Component;
