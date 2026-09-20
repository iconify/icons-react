import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luy5b2qht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luy5b2qht"/>`,
		"fallback": "mdi:logic-gate-and",
	});
}

export default Component;
