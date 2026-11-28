import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abu8hlbee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abu8hlbee"/>`,
		"fallback": "noviair:users-minus",
	});
}

export default Component;
