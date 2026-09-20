import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fsade8bxv.css';
import '../../css/f/f6rz0s9bl.css';
import '../../css/z/z571ntbme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fsade8bxv"/><path class="f6rz0s9bl"/><circle class="z571ntbme"/></g>`,
		"fallback": "reicon:pen-sparkle",
	});
}

export default Component;
