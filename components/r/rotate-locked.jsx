import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wzdz90gow.css';
import '../../css/d/devx4xt0b.css';
import '../../css/h/hqqreeu3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wzdz90gow"/><path class="devx4xt0b"/><path class="hqqreeu3k"/></g>`,
		"fallback": "tdesign:rotate-locked",
	});
}

export default Component;
