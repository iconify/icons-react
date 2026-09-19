import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6a1je0ov.css';
import '../../css/l/lx1df9t7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6a1je0ov"/><path class="lx1df9t7l"/>`,
		"fallback": "boxicons:video-plus",
	});
}

export default Component;
