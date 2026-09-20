import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvm7w0qkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvm7w0qkw"/>`,
		"fallback": "ri:soundcloud-fill",
	});
}

export default Component;
