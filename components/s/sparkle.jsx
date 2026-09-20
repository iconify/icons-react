import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ryzj3q54b.css';
import '../../css/y/y_ejx8mec.css';
import '../../css/s/sfljat1ez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ryzj3q54b"/><circle class="y_ejx8mec"/><circle class="sfljat1ez"/></g>`,
		"fallback": "proicons:sparkle",
	});
}

export default Component;
