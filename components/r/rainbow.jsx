import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbqcy-x8t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbqcy-x8t"/>`,
		"fallback": "bi:rainbow",
	});
}

export default Component;
