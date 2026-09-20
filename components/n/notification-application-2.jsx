import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/th6g33pod.css';
import '../../css/b/bwtu4ob_m.css';
import '../../css/e/e9lc3-5zf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="th6g33pod"/><path class="bwtu4ob_m"/><path class="e9lc3-5zf"/></g>`,
		"fallback": "streamline-color:notification-application-2",
	});
}

export default Component;
