import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rsuhmibmm.css';
import '../../css/w/wpni9ibne.css';
import '../../css/b/bd54cx9ce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="rsuhmibmm"/><path class="wpni9ibne"/><path class="bd54cx9ce"/></g>`,
		"fallback": "hugeicons:navigation-05",
	});
}

export default Component;
