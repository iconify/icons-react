import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2bcb8bny.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w2bcb8bny"/>`,
		"fallback": "streamline-plump:location-heart-pin-remix",
	});
}

export default Component;
