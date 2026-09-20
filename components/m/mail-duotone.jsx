import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytvgiibzk.css';
import '../../css/c/cll2n7u_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ytvgiibzk"/><path class="cll2n7u_m"/></g>`,
		"fallback": "si:mail-duotone",
	});
}

export default Component;
