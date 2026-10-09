import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy-rofhks.css';
import '../../css/u/uzpb98bpp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy-rofhks"/><path class="uzpb98bpp"/>`,
		"fallback": "energy-icons:pin-48-bold",
	});
}

export default Component;
