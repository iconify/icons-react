import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syg5edbfx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syg5edbfx"/>`,
		"fallback": "fa7-solid:video-camera",
	});
}

export default Component;
