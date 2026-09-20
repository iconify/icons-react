import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4udb9b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n4udb9b9s"/>`,
		"fallback": "mingcute:radar-2-fill",
	});
}

export default Component;
