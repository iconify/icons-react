import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6p4lbbxo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h6p4lbbxo"/>`,
		"fallback": "streamline:location-compass-1-remix",
	});
}

export default Component;
