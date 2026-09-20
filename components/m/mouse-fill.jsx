import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr0hxdh-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qr0hxdh-f"/>`,
		"fallback": "keyline-icons:mouse-fill",
	});
}

export default Component;
