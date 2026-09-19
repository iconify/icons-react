import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d25c1tbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d25c1tbnl"/>`,
		"fallback": "boxicons:shape-subtract-filled",
	});
}

export default Component;
