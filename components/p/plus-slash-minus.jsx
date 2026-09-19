import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct5x7jbbv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct5x7jbbv"/>`,
		"fallback": "bi:plus-slash-minus",
	});
}

export default Component;
