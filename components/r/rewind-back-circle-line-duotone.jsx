import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hpbathh7a.css';
import '../../css/u/u836v1b4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hpbathh7a"/><path class="u836v1b4v"/></g>`,
		"fallback": "solar:rewind-back-circle-line-duotone",
	});
}

export default Component;
