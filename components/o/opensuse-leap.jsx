import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njc7jtbfi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njc7jtbfi"/>`,
		"fallback": "selfhst:opensuse-leap",
	});
}

export default Component;
