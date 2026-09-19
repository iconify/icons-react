import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxf1tkb1o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxf1tkb1o"/>`,
		"fallback": "game-icons:sword-slice",
	});
}

export default Component;
