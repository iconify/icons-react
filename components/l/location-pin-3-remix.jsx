import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnkyu7bdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dnkyu7bdt"/>`,
		"fallback": "streamline-sharp:location-pin-3-remix",
	});
}

export default Component;
