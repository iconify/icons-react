import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpgql3bkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dpgql3bkx"/>`,
		"fallback": "streamline-sharp:location-pin-money-atm-1-remix",
	});
}

export default Component;
