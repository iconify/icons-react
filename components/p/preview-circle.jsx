import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z5v2apb6a.css';
import '../../css/w/w50fhzb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z5v2apb6a"/><path class="w50fhzb7f"/></g>`,
		"fallback": "mage:preview-circle",
	});
}

export default Component;
