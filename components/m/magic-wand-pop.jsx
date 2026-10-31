import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ei3ecxn7v.css';
import '../../css/l/l8jhx2bwn.css';
import '../../css/m/m8fr7ezrm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ei3ecxn7v"/><path class="l8jhx2bwn"/><path class="m8fr7ezrm"/></g>`,
		"fallback": "streamline-kameleon-color:magic-wand-pop",
	});
}

export default Component;
