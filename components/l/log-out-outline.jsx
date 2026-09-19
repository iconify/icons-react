import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jruyniban.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jruyniban"/>`,
		"fallback": "ion:log-out-outline",
	});
}

export default Component;
