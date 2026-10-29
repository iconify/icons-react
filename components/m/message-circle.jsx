import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ugtk8rpvz.css';
import '../../css/r/rdtj9bbgj.css';
import '../../css/l/lakfadben.css';
import '../../css/l/ls-gnnb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ugtk8rpvz wm-k"/><path class="rdtj9bbgj wm-k"/><path class="lakfadben wm-k"/><path class="ls-gnnb-j wm-shine"/></g>`,
		"fallback": "withicons-anime:message-circle",
	});
}

export default Component;
