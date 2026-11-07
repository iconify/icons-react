import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yx7codbhz.css';
import '../../css/n/n3w6d7hoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yx7codbhz"/><path class="n3w6d7hoa"/></g>`,
		"fallback": "solar:snowflake-line-duotone",
	});
}

export default Component;
