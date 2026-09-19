import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_33i9b1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_33i9b1x"/>`,
		"fallback": "boxicons:shape-exclude-alt-filled",
	});
}

export default Component;
