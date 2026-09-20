import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp4j1ldlo.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp4j1ldlo"/>`,
		"fallback": "lineicons:line-dotted",
	});
}

export default Component;
