import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_047w_sc.css';
import '../../css/q/qxav1fa4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o_047w_sc"/><circle class="qxav1fa4j"/></g>`,
		"fallback": "lets-icons:temperature-light",
	});
}

export default Component;
