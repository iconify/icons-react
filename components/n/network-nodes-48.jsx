import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4caingdq.css';
import '../../css/s/sy8emvbhk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4caingdq"/><path class="sy8emvbhk"/>`,
		"fallback": "energy-icons:network-nodes-48",
	});
}

export default Component;
