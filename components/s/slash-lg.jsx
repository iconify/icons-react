import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj4eti7ts.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj4eti7ts"/>`,
		"fallback": "bi:slash-lg",
	});
}

export default Component;
