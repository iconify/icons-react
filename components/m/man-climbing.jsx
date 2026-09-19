import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_nee0cyh.css';
import '../../css/k/kafmo0bpp.css';
import '../../css/l/lkpq_rbdh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_nee0cyh"/><path class="kafmo0bpp"/><path class="lkpq_rbdh"/>`,
		"fallback": "fluent-emoji-high-contrast:man-climbing",
	});
}

export default Component;
