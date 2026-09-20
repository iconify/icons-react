import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd83ysbnr.css';
import '../../css/t/t58dp5a-u.css';
import '../../css/y/y_g4h7d1a.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd83ysbnr"/><path class="t58dp5a-u"/><path class="y_g4h7d1a"/>`,
		"fallback": "openmoji:japanese-symbol-for-beginner",
	});
}

export default Component;
