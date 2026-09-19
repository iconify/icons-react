import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0l45-b3u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l0l45-b3u"/>`,
		"fallback": "heroicons-solid:menu-alt-1",
	});
}

export default Component;
