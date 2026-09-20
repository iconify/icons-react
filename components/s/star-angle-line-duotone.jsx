import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o3sti_byq.css';
import '../../css/g/gu2e9r45w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o3sti_byq"/><path class="gu2e9r45w"/></g>`,
		"fallback": "solar:star-angle-line-duotone",
	});
}

export default Component;
