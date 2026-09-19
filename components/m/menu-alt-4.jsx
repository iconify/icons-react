import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saz4hzcge.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="saz4hzcge"/>`,
		"fallback": "heroicons-solid:menu-alt-4",
	});
}

export default Component;
