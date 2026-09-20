import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e_863hlpn.css';
import '../../css/k/k77tqcqcu.css';
import '../../css/y/yo3f40bnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e_863hlpn"/><path clip-rule="evenodd" class="k77tqcqcu"/><path class="yo3f40bnt"/></g>`,
		"fallback": "reicon:star-shine-duotone",
	});
}

export default Component;
