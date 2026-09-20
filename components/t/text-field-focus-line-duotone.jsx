import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gayebnb-o.css';
import '../../css/c/cd79ck-um.css';
import '../../css/o/om4lnzbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gayebnb-o"/><path class="cd79ck-um"/><path class="om4lnzbpu"/></g>`,
		"fallback": "solar:text-field-focus-line-duotone",
	});
}

export default Component;
