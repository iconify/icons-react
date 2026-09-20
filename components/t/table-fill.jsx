import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikim0yefd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikim0yefd"/>`,
		"fallback": "mingcute:table-fill",
	});
}

export default Component;
