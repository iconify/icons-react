import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ims4vfbey.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ims4vfbey"/>`,
		"fallback": "fa7-solid:map",
	});
}

export default Component;
