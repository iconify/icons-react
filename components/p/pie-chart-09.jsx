import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr2y-vbdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr2y-vbdw"/>`,
		"fallback": "hugeicons:pie-chart-09",
	});
}

export default Component;
