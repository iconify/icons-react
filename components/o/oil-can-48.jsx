import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su-w6wf-n.css';
import '../../css/q/qvm9k_b5g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su-w6wf-n"/><path class="qvm9k_b5g"/>`,
		"fallback": "energy-icons:oil-can-48",
	});
}

export default Component;
