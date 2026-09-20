import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i3uygwf9o.css';
import '../../css/a/a1a5q-mno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i3uygwf9o"/><path class="a1a5q-mno"/></g>`,
		"fallback": "reicon:shop-remove-filled",
	});
}

export default Component;
