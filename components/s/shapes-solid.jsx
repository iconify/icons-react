import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm2btmm-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm2btmm-v"/>`,
		"fallback": "pixel:shapes-solid",
	});
}

export default Component;
