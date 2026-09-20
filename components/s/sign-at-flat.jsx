import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_8149b6p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g_8149b6p"/>`,
		"fallback": "streamline-flex-color:sign-at-flat",
	});
}

export default Component;
