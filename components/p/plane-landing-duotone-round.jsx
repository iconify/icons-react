import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1qb5kekq.css';
import '../../css/z/zw3b81pam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r1qb5kekq"/><path class="zw3b81pam"/></g>`,
		"fallback": "coolicons:plane-landing-duotone-round",
	});
}

export default Component;
