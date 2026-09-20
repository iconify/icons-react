import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdj631veg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdj631veg"/>`,
		"fallback": "mdi:server-network",
	});
}

export default Component;
