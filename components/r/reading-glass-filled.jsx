import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddwiuu_lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b ddwiuu_lf"/>`,
		"fallback": "boxicons:reading-glass-filled",
	});
}

export default Component;
