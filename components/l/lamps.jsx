import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtp6h5bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtp6h5bje"/>`,
		"fallback": "mdi:lamps",
	});
}

export default Component;
