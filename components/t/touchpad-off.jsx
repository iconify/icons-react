import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b708ezicz.css';
import '../../css/s/sloug4bgy.css';
import '../../css/v/v8cohobjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="b708ezicz"/><rect class="sloug4bgy"/><path class="v8cohobjz"/></g>`,
		"fallback": "andrsrxn:touchpad-off",
	});
}

export default Component;
