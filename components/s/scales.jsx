import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dx686cbeq.css';
import '../../css/i/ibvamdbhn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dx686cbeq"/><path class="ibvamdbhn"/></g>`,
		"fallback": "at-icons:scales",
	});
}

export default Component;
