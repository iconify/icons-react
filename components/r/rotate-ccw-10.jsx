import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bazxsibde.css';
import '../../css/x/xbkw3s-py.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bazxsibde"/><path class="xbkw3s-py"/>`,
		"fallback": "boxicons:rotate-ccw-10",
	});
}

export default Component;
