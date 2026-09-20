import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfr_agb5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yfr_agb5d"/>`,
		"fallback": "keyline-icons:map-pin-heart-fill",
	});
}

export default Component;
