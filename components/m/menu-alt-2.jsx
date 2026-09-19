import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxpmk7qmj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vxpmk7qmj"/>`,
		"fallback": "heroicons-solid:menu-alt-2",
	});
}

export default Component;
