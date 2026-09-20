import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6aseibta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z6aseibta"/>`,
		"fallback": "mingcute:palace-fill",
	});
}

export default Component;
