import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki8ur8pfk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ki8ur8pfk"/>`,
		"fallback": "heroicons-solid:minus-circle",
	});
}

export default Component;
