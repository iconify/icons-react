import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mlc1znltn.css';
import '../../css/s/s_7e9gbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mlc1znltn"/><path class="s_7e9gbgc"/></g>`,
		"fallback": "keyline-icons:user-minus-sharp-fill",
	});
}

export default Component;
