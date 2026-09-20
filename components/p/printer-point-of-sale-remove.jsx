import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqw0mabke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqw0mabke"/>`,
		"fallback": "mdi:printer-point-of-sale-remove",
	});
}

export default Component;
