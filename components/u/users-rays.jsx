import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az9e_ccag.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az9e_ccag"/>`,
		"fallback": "fa7-solid:users-rays",
	});
}

export default Component;
