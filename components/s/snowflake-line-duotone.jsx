import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/txk6dwbhy.css';
import '../../css/r/rucygrbbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="txk6dwbhy"/><path class="rucygrbbc"/></g>`,
		"fallback": "solar:snowflake-line-duotone",
	});
}

export default Component;
