import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk-1c2b3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk-1c2b3u"/>`,
		"fallback": "uil:vertical-align-top",
	});
}

export default Component;
