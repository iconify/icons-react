import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx1ngfbkm.css';
import '../../css/n/n6y0s7eue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx1ngfbkm"/><path class="n6y0s7eue"/>`,
		"fallback": "tdesign:palace-3-filled",
	});
}

export default Component;
