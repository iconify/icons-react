import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yikjj-8fy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yikjj-8fy"/>`,
		"fallback": "file-icons:microsoft-visio",
	});
}

export default Component;
