import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocos3pbek.css';
import '../../css/z/z-jhzydsn.css';
import '../../css/m/moyuhzd7x.css';
import '../../css/o/ozwwbac2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ocos3pbek"/><path class="z-jhzydsn"/><path class="moyuhzd7x"/><path class="ozwwbac2e"/></g>`,
		"fallback": "tdesign:video",
	});
}

export default Component;
