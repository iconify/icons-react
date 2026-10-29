import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e6qls9a2m.css';
import '../../css/v/vf27h3ogo.css';
import '../../css/s/s08vmhm9f.css';
import '../../css/t/t7n-iqbfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e6qls9a2m wm-k"/><path class="vf27h3ogo wm-k"/><path class="s08vmhm9f wm-k"/><path class="t7n-iqbfq wm-shine"/></g>`,
		"fallback": "withicons-anime:pilcrow",
	});
}

export default Component;
