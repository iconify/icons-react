import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h38xtl-6m.css';
import '../../css/z/z3me40b2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h38xtl-6m"/><path class="z3me40b2g"/>`,
		"fallback": "boxicons:skull",
	});
}

export default Component;
