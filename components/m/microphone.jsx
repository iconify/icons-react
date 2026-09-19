import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn4ka_0ey.css';

const viewBox = {"width":352,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn4ka_0ey"/>`,
		"fallback": "fa-solid:microphone",
	});
}

export default Component;
