import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygox79bep.css';
import '../../css/z/zy_fdbc1g.css';
import '../../css/j/jbrxmkbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ygox79bep"/><path class="zy_fdbc1g"/><path class="jbrxmkbnr"/></g>`,
		"fallback": "lets-icons:lock-light",
	});
}

export default Component;
