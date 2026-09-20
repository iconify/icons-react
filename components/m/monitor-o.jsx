import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfz7s0qpe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yfz7s0qpe"/>`,
		"fallback": "pajamas:monitor-o",
	});
}

export default Component;
