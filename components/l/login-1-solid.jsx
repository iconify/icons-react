import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x07qj48-r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x07qj48-r"/>`,
		"fallback": "streamline-flex:login-1-solid",
	});
}

export default Component;
