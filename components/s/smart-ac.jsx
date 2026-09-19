import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s3a-gwzfk.css';
import '../../css/l/l45tu36gl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s3a-gwzfk"/><path class="l45tu36gl"/></g>`,
		"fallback": "hugeicons:smart-ac",
	});
}

export default Component;
