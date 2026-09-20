import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wvb6i7bty.css';
import '../../css/o/oq6m7kb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wvb6i7bty"/><path class="oq6m7kb8k"/></g>`,
		"fallback": "si:user-alt-5-duotone",
	});
}

export default Component;
