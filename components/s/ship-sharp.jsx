import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzsqa9bwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzsqa9bwv"/>`,
		"fallback": "keyline-icons:ship-sharp",
	});
}

export default Component;
