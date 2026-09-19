import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5-cm9x3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5-cm9x3a"/>`,
		"fallback": "hugeicons:link",
	});
}

export default Component;
