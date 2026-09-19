import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_7gtnktk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n_7gtnktk"/>`,
		"fallback": "heroicons-solid:menu-alt-3",
	});
}

export default Component;
