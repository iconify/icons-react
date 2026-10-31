import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w_vlwsr9u.css';
import '../../css/q/q1vhaj3yj.css';
import '../../css/w/w-d2nkbrf.css';
import '../../css/g/gv-pruq2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="w_vlwsr9u wm-shadow"/><path class="q1vhaj3yj wm-shadow"/><path class="w-d2nkbrf"/><path class="gv-pruq2e"/></g>`,
		"fallback": "withicons-brutal:shankh",
	});
}

export default Component;
