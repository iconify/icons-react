import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxy1ww9is.css';
import '../../css/h/h74g0mbrd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vxy1ww9is"/><path class="h74g0mbrd"/></g>`,
		"fallback": "streamline-color:store-2-flat",
	});
}

export default Component;
