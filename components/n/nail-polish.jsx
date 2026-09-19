import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eb09_76ei.css';
import '../../css/r/rfk-9n7sa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eb09_76ei"/><circle class="rfk-9n7sa"/></g>`,
		"fallback": "icon-park-outline:nail-polish",
	});
}

export default Component;
