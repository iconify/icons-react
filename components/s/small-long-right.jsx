import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lebys2svk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lebys2svk"/>`,
		"fallback": "ci:small-long-right",
	});
}

export default Component;
