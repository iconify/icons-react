import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gvf8_1bhd.css';
import '../../css/g/g2y24gmro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><rect class="gvf8_1bhd"/><path class="g2y24gmro"/></g>`,
		"fallback": "lets-icons:mic-alt",
	});
}

export default Component;
