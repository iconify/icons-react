import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/pn8amu1fn.css';
import '../../css/j/jvtjbnueh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="pn8amu1fn"/><path class="jvtjbnueh"/></g>`,
		"fallback": "hugeicons:maze",
	});
}

export default Component;
