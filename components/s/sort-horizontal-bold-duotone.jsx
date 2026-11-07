import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwdyy_0gr.css';
import '../../css/j/jdu2jtbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwdyy_0gr"/><path class="jdu2jtbuw"/>`,
		"fallback": "solar:sort-horizontal-bold-duotone",
	});
}

export default Component;
