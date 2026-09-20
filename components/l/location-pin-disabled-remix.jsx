import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcl-lybod.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fcl-lybod"/>`,
		"fallback": "streamline-plump:location-pin-disabled-remix",
	});
}

export default Component;
