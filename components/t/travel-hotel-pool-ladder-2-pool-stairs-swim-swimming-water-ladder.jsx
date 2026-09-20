import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xducvmk_t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xducvmk_t"/>`,
		"fallback": "streamline:travel-hotel-pool-ladder-2-pool-stairs-swim-swimming-water-ladder",
	});
}

export default Component;
