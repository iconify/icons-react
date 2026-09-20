import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4g67nb5o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4g67nb5o"/>`,
		"fallback": "roentgen:japan-koban",
	});
}

export default Component;
