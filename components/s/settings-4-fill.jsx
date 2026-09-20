import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9nf5g3ba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w9nf5g3ba"/>`,
		"fallback": "mingcute:settings-4-fill",
	});
}

export default Component;
