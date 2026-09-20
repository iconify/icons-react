import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5uy1i0jv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t5uy1i0jv"/>`,
		"fallback": "streamline:login-1-solid",
	});
}

export default Component;
