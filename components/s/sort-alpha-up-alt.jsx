import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc886ubpj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc886ubpj"/>`,
		"fallback": "fa7-solid:sort-alpha-up-alt",
	});
}

export default Component;
