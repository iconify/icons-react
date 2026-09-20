import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl-9vxerp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl-9vxerp"/>`,
		"fallback": "mdi:select-inverse",
	});
}

export default Component;
