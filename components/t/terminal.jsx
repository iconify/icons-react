import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4770sjkr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h4770sjkr"/>`,
		"fallback": "heroicons-solid:terminal",
	});
}

export default Component;
