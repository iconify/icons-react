import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeifo2b_e.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeifo2b_e"/>`,
		"fallback": "wi:moon-alt-third-quarter",
	});
}

export default Component;
