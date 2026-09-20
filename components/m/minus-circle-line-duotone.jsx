import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/doy9q4b5f.css';
import '../../css/n/nrnj7e8vo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="doy9q4b5f"/><path class="nrnj7e8vo"/></g>`,
		"fallback": "solar:minus-circle-line-duotone",
	});
}

export default Component;
