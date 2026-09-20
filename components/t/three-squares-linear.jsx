import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w37s95bcr.css';
import '../../css/n/ncu9ifj7a.css';
import '../../css/g/gz8ip2wkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w37s95bcr"/><path class="ncu9ifj7a"/><path class="gz8ip2wkb"/></g>`,
		"fallback": "solar:three-squares-linear",
	});
}

export default Component;
