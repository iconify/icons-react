import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t77fmmb0k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t77fmmb0k"/>`,
		"fallback": "bi:ticket-fill",
	});
}

export default Component;
