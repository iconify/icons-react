import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yut4i54ux.css';
import '../../css/e/e10lu5twz.css';

const viewBox = {"width":189,"height":52};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yut4i54ux"/><path class="e10lu5twz"/></g>`,
		"fallback": "thesvg-color:lunit",
	});
}

export default Component;
