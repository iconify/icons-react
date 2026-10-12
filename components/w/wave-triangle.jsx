import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg0t1c3af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg0t1c3af"/>`,
		"fallback": "andrsrxn:wave-triangle",
	});
}

export default Component;
