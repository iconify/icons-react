import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zkbw7lrcj.css';
import '../../css/w/w8xd_eojn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zkbw7lrcj"/><path class="w8xd_eojn"/></g>`,
		"fallback": "streamline-color:shopping-basket-2",
	});
}

export default Component;
