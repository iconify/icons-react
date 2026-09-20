import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qvjsq0b9t.css';
import '../../css/y/yfiyrbfao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qvjsq0b9t"/><path class="yfiyrbfao"/></g>`,
		"fallback": "si:street-sign-duotone",
	});
}

export default Component;
