import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hwv8c50wu.css';
import '../../css/d/dwlz50b1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hwv8c50wu"/><path class="dwlz50b1l"/></g>`,
		"fallback": "keyline-icons:panel-left-dashed-sharp-fill",
	});
}

export default Component;
