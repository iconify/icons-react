import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmd0fo11n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmd0fo11n"/>`,
		"fallback": "hugeicons:party",
	});
}

export default Component;
