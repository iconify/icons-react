import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/txk6dwbhy.css';
import '../../css/u/u-5-8tbnp.css';
import '../../css/n/nlvmx70rd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="txk6dwbhy"/><path class="u-5-8tbnp"/><path class="nlvmx70rd"/></g>`,
		"fallback": "solar:snowflake-linear",
	});
}

export default Component;
