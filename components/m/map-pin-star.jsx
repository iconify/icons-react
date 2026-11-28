import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elu00db0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elu00db0w"/>`,
		"fallback": "noviair-light:map-pin-star",
	});
}

export default Component;
