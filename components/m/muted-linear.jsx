import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b3m8dwzwt.css';
import '../../css/w/wittmregh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b3m8dwzwt"/><path class="wittmregh"/></g>`,
		"fallback": "solar:muted-linear",
	});
}

export default Component;
