import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jvtjbnueh.css';
import '../../css/r/rz2tmxqzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jvtjbnueh"/><path class="rz2tmxqzb"/></g>`,
		"fallback": "hugeicons:square-arrow-left-03",
	});
}

export default Component;
