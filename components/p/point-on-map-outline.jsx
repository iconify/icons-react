import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaz9sl6in.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oaz9sl6in"/>`,
		"fallback": "solar:point-on-map-outline",
	});
}

export default Component;
