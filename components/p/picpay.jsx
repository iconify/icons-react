import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z47l6_8sb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z47l6_8sb"/>`,
		"fallback": "simple-icons:picpay",
	});
}

export default Component;
