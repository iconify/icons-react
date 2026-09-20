import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxr668a_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxr668a_y"/>`,
		"fallback": "tdesign:usercase-filled",
	});
}

export default Component;
