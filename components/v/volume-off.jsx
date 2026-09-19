import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwdk9vw-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwdk9vw-u"/>`,
		"fallback": "mono-icons:volume-off",
	});
}

export default Component;
