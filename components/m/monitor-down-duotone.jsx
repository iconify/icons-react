import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3bk71n9p.css';
import '../../css/l/l376ogbcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e3bk71n9p"/><path class="l376ogbcm"/></g>`,
		"fallback": "si:monitor-down-duotone",
	});
}

export default Component;
