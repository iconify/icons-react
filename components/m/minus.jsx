import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpjgxrz7u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kpjgxrz7u"/>`,
		"fallback": "heroicons-solid:minus",
	});
}

export default Component;
