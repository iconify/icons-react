import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6yvi_chi.css';
import '../../css/t/t8i6bfbhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6yvi_chi secondary"/><path class="primary t8i6bfbhh"/>`,
		"fallback": "iconaut:stop-duo",
	});
}

export default Component;
