import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b48nsibwb.css';
import '../../css/j/jqgwa20rl.css';
import '../../css/s/s8h64qb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b48nsibwb"/><path class="jqgwa20rl"/><path class="s8h64qb8d"/></g>`,
		"fallback": "hugeicons:setting-error-04",
	});
}

export default Component;
