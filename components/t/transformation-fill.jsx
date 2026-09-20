import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjt97bc8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xjt97bc8r"/>`,
		"fallback": "mingcute:transformation-fill",
	});
}

export default Component;
