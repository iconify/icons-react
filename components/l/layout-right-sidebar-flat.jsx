import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itarbfbur.css';
import '../../css/i/iqub7raeq.css';
import '../../css/p/pjnrrepbz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="itarbfbur"/><path class="iqub7raeq"/><path clip-rule="evenodd" class="pjnrrepbz"/></g>`,
		"fallback": "streamline-plump-color:layout-right-sidebar-flat",
	});
}

export default Component;
