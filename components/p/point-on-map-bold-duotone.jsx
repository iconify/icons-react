import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-cbzraid.css';
import '../../css/f/f3r88-jzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-cbzraid"/><path clip-rule="evenodd" class="f3r88-jzr"/>`,
		"fallback": "solar:point-on-map-bold-duotone",
	});
}

export default Component;
