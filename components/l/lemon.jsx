import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_u_7tbvg.css';
import '../../css/i/i71-ju5_c.css';
import '../../css/y/ytd2ngj_e.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_u_7tbvg"/><path class="i71-ju5_c"/><path class="ytd2ngj_e"/>`,
		"fallback": "iconito:lemon",
	});
}

export default Component;
