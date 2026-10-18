import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rplblqbon.css';
import '../../css/n/nlh68myqj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rplblqbon"/><path class="nlh68myqj"/>`,
		"fallback": "energy-icons:state-of-charge-48",
	});
}

export default Component;
