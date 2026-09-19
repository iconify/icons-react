import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a75zxoc1y.css';
import '../../css/k/ke9xms0bs.css';
import '../../css/o/ozu0o6bgp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a75zxoc1y"/><path class="ke9xms0bs"/><path class="ozu0o6bgp"/></g>`,
		"fallback": "at-icons:wave",
	});
}

export default Component;
