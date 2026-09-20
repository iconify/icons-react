import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqvlqrbxx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lqvlqrbxx"/>`,
		"fallback": "ix:variable",
	});
}

export default Component;
