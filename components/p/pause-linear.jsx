import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cw02hlbdb.css';
import '../../css/z/z6av7rb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cw02hlbdb"/><path class="z6av7rb9i"/></g>`,
		"fallback": "solar:pause-linear",
	});
}

export default Component;
