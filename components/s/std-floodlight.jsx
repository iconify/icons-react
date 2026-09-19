import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps12n-bxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps12n-bxz"/>`,
		"fallback": "cbi:std-floodlight",
	});
}

export default Component;
