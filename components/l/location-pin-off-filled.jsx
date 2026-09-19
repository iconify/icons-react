import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovmiey8oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ovmiey8oy"/>`,
		"fallback": "griddy-icons:location-pin-off-filled",
	});
}

export default Component;
