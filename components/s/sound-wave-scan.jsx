import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx-0v6v5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx-0v6v5v"/>`,
		"fallback": "andrsrxn:sound-wave-scan",
	});
}

export default Component;
