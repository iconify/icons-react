import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jes81sbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jes81sbzq"/>`,
		"fallback": "mdi:printer-point-of-sale-sync",
	});
}

export default Component;
