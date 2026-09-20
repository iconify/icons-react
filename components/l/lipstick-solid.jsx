import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsjl_jbyd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zsjl_jbyd"/>`,
		"fallback": "streamline:lipstick-solid",
	});
}

export default Component;
