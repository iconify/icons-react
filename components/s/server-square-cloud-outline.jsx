import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlx_-9b5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zlx_-9b5i"/>`,
		"fallback": "solar:server-square-cloud-outline",
	});
}

export default Component;
