import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a_k8bq4mi.css';
import '../../css/q/qohm1hbjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a_k8bq4mi"/><path class="qohm1hbjm"/></g>`,
		"fallback": "solar:pill-line-duotone",
	});
}

export default Component;
