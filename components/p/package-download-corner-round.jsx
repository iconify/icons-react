import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0b01rbrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0b01rbrc"/>`,
		"fallback": "coolicons:package-download-corner-round",
	});
}

export default Component;
