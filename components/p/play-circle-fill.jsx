import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6odaqx-w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6odaqx-w"/>`,
		"fallback": "bi:play-circle-fill",
	});
}

export default Component;
