import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sd2cgyb3b.css';
import '../../css/v/v-oaowttv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sd2cgyb3b"/><path class="v-oaowttv"/></g>`,
		"fallback": "solar:map-point-favourite-linear",
	});
}

export default Component;
