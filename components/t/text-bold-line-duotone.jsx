import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mpksxfdjb.css';
import '../../css/g/g--idbcum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mpksxfdjb"/><path class="g--idbcum"/></g>`,
		"fallback": "solar:text-bold-line-duotone",
	});
}

export default Component;
