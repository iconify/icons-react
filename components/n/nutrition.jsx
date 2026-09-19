import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izvz7ykmk.css';
import '../../css/j/jmjkwqnaa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izvz7ykmk"/><path class="jmjkwqnaa"/>`,
		"fallback": "ion:nutrition",
	});
}

export default Component;
