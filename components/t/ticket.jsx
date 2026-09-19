import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxd0vacrx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxd0vacrx"/>`,
		"fallback": "bi:ticket",
	});
}

export default Component;
