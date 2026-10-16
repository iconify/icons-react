import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abgh_rbqn.css';
import '../../css/o/olx2f-b_r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abgh_rbqn"/><path class="olx2f-b_r"/>`,
		"fallback": "energy-icons:scrubber-48-bold",
	});
}

export default Component;
