import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za4hbfb4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za4hbfb4e"/>`,
		"fallback": "mdi:swap-horizontal-circle",
	});
}

export default Component;
