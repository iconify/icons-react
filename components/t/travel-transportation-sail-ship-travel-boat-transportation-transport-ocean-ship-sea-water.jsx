import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn_bipmzk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn_bipmzk"/>`,
		"fallback": "streamline:travel-transportation-sail-ship-travel-boat-transportation-transport-ocean-ship-sea-water",
	});
}

export default Component;
