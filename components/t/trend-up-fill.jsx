import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaarv9b2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jaarv9b2w"/>`,
		"fallback": "iconamoon:trend-up-fill",
	});
}

export default Component;
