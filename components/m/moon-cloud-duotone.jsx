import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wns5-ccua.css';
import '../../css/s/stz1f9bap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wns5-ccua"/><path class="stz1f9bap"/></g>`,
		"fallback": "reicon:moon-cloud-duotone",
	});
}

export default Component;
