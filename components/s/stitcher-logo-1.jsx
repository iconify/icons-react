import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/h/hmhldf1gl.css';
import '../../css/l/ldciydfiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="hmhldf1gl"/><path class="ldciydfiy"/></g>`,
		"fallback": "streamline-logos:stitcher-logo-1",
	});
}

export default Component;
