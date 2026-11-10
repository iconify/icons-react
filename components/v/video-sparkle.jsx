import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bz6muwb-n.css';
import '../../css/y/y2kw9ytba.css';
import '../../css/j/jpu3wbbyc.css';
import '../../css/t/t12pdhbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bz6muwb-n"/><path class="y2kw9ytba"/><path class="jpu3wbbyc"/><path class="t12pdhbtt"/></g>`,
		"fallback": "andrsrxn:video-sparkle",
	});
}

export default Component;
