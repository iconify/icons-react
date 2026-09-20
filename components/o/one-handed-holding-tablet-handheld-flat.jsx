import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s2m0tac2d.css';
import '../../css/o/oji7znplw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s2m0tac2d"/><path clip-rule="evenodd" class="oji7znplw"/></g>`,
		"fallback": "streamline-plump-color:one-handed-holding-tablet-handheld-flat",
	});
}

export default Component;
