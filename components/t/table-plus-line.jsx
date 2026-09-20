import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuaqh7tpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuaqh7tpd"/>`,
		"fallback": "majesticons:table-plus-line",
	});
}

export default Component;
