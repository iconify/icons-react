import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7uc44bnn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o7uc44bnn"/>`,
		"fallback": "streamline:medical-cross-sign-healthcare-remix",
	});
}

export default Component;
