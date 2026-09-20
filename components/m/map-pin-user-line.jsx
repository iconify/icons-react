import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_kangb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_kangb5m"/>`,
		"fallback": "ri:map-pin-user-line",
	});
}

export default Component;
