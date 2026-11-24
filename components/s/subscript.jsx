import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y34g_0b5l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y34g_0b5l"/>`,
		"fallback": "gravity-ui:subscript",
	});
}

export default Component;
