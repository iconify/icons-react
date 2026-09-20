import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqebvetyd.css';
import '../../css/r/rurheh2hl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqebvetyd"/><path class="rurheh2hl"/>`,
		"fallback": "mingcute:puzzled-line",
	});
}

export default Component;
