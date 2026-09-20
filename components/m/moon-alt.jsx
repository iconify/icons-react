import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-_wbtfks.css';
import '../../css/l/l_6w0uzxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v-_wbtfks"/><path class="l_6w0uzxz"/></g>`,
		"fallback": "lets-icons:moon-alt",
	});
}

export default Component;
