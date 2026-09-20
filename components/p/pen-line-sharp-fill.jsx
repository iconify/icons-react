import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hble56f9w.css';
import '../../css/c/cukpe2bxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hble56f9w"/><path class="cukpe2bxl"/></g>`,
		"fallback": "keyline-icons:pen-line-sharp-fill",
	});
}

export default Component;
