import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p5wwzt7iy.css';
import '../../css/k/khgtwubok.css';
import '../../css/s/seiis-bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p5wwzt7iy"/><path class="khgtwubok"/><path class="seiis-bzt"/></g>`,
		"fallback": "reicon:money-recive-filled",
	});
}

export default Component;
