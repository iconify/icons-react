import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eto1u3blt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eto1u3blt"/>`,
		"fallback": "coolicons:map-pin-check-round",
	});
}

export default Component;
