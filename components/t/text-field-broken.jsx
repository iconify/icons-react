import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/spvw1m4wo.css';
import '../../css/g/gayebnb-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="spvw1m4wo"/><path class="gayebnb-o"/></g>`,
		"fallback": "solar:text-field-broken",
	});
}

export default Component;
