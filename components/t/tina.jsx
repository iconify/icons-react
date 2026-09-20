import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4dltdb0b.css';
import '../../css/j/jnz9frblc.css';
import '../../css/u/uanpnlb-p.css';

const viewBox = {"width":448,"height":621};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p4dltdb0b"><path class="jnz9frblc"/><path class="uanpnlb-p"/></g>`,
		"fallback": "thesvg-color:tina",
	});
}

export default Component;
