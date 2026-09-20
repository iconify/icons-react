import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2ewufbuy.css';
import '../../css/m/mv4_4_bmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v2ewufbuy"/><path class="mv4_4_bmp"/></g>`,
		"fallback": "lets-icons:jump-time-duotone",
	});
}

export default Component;
