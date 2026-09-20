import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eio-gbbes.css';
import '../../css/r/rp04lyous.css';
import '../../css/n/no4wsvg0e.css';
import '../../css/z/zv90_cths.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eio-gbbes"/><path clip-rule="evenodd" class="rp04lyous"/><path class="no4wsvg0e"/><path clip-rule="evenodd" class="zv90_cths"/></g>`,
		"fallback": "tdesign:notification-circle",
	});
}

export default Component;
