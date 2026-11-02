import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng0cel71x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng0cel71x"/>`,
		"fallback": "mingcute:tree-2-fill",
	});
}

export default Component;
