import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ojjq-4bcv.css';
import '../../css/d/d70jivo9u.css';
import '../../css/a/a8ijy1plb.css';
import '../../css/f/f6hdfiifw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ojjq-4bcv"/><path class="d70jivo9u"/><path class="a8ijy1plb"/><path class="f6hdfiifw"/></g>`,
		"fallback": "hugeicons:mouse-left-click-04",
	});
}

export default Component;
