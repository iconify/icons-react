import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcy09zexs.css';
import '../../css/v/vani8sbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcy09zexs"/><path class="vani8sbax"/>`,
		"fallback": "eva:pie-chart-outline",
	});
}

export default Component;
