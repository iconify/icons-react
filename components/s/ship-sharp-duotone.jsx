import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/u-_p63bcs.css';
import '../../css/j/j6v-2tbep.css';
import '../../css/z/z03o_tbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="u-_p63bcs"/><path class="j6v-2tbep"/><path class="z03o_tbrb"/></g>`,
		"fallback": "keyline-icons:ship-sharp-duotone",
	});
}

export default Component;
