import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rve-l_nnn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rve-l_nnn"/>`,
		"fallback": "streamline-color:sign-at-flat",
	});
}

export default Component;
