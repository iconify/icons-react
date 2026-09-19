import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x84j69sji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x84j69sji"/>`,
		"fallback": "griddy-icons:notification-minus",
	});
}

export default Component;
