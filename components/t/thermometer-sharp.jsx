import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p745bwb1j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p745bwb1j"/>`,
		"fallback": "ion:thermometer-sharp",
	});
}

export default Component;
