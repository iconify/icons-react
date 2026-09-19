import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulyc9jzzv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulyc9jzzv"/>`,
		"fallback": "fa7-solid:money-bill-wave-alt",
	});
}

export default Component;
