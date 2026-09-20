import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiyj-2b5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiyj-2b5u"/>`,
		"fallback": "simple-icons:tether",
	});
}

export default Component;
