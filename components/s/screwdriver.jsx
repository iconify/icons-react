import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxxn8ualk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxxn8ualk"/>`,
		"fallback": "noviair-light:screwdriver",
	});
}

export default Component;
