import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgdmwwbvt.css';
import '../../css/j/jk8gvlbwz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgdmwwbvt"/><path class="jk8gvlbwz"/>`,
		"fallback": "energy-icons:oscilloscope-20-bold",
	});
}

export default Component;
