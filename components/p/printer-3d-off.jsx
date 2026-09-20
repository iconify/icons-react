import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1eibmbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1eibmbps"/>`,
		"fallback": "mdi:printer-3d-off",
	});
}

export default Component;
