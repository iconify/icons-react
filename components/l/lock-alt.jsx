import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmi9rovle.css';
import '../../css/f/fttkq3t5o.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmi9rovle"/><path class="fttkq3t5o"/>`,
		"fallback": "lineicons:lock-alt",
	});
}

export default Component;
