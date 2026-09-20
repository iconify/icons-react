import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwg6h_bva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwg6h_bva"/>`,
		"fallback": "tabler:map-pin-2",
	});
}

export default Component;
