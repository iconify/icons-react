import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jl1oqwibm.css';
import '../../css/y/yz2b6f11q.css';
import '../../css/e/ey4dcwbbm.css';
import '../../css/y/yavo5x82z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jl1oqwibm"/><path class="yz2b6f11q"/><path class="ey4dcwbbm"/><path class="yavo5x82z"/></g>`,
		"fallback": "streamline-flex-color:laptop",
	});
}

export default Component;
