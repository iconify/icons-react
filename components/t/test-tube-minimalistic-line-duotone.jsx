import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sjd77kgpz.css';
import '../../css/a/aw1-40b2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sjd77kgpz"/><path class="aw1-40b2a"/></g>`,
		"fallback": "solar:test-tube-minimalistic-line-duotone",
	});
}

export default Component;
