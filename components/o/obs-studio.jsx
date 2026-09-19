import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvj9sbfxl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvj9sbfxl"/>`,
		"fallback": "fa7-brands:obs-studio",
	});
}

export default Component;
