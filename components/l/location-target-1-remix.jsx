import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo8u7cwpx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yo8u7cwpx"/>`,
		"fallback": "streamline:location-target-1-remix",
	});
}

export default Component;
