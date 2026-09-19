import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqgpq5bla.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqgpq5bla"/>`,
		"fallback": "bi:laptop",
	});
}

export default Component;
