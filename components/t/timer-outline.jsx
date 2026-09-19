import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6yzo2b5e.css';
import '../../css/q/qzignebpq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6yzo2b5e"/><path class="qzignebpq"/>`,
		"fallback": "famicons:timer-outline",
	});
}

export default Component;
