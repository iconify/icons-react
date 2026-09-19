import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/l/l38d-nb8d.css';
import '../../css/t/t4d1h1icc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="l38d-nb8d"/><path class="t4d1h1icc"/></g>`,
		"fallback": "iconamoon:sign-factorial-bold",
	});
}

export default Component;
