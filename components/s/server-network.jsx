import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn-r59bdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn-r59bdw"/>`,
		"fallback": "uil:server-network",
	});
}

export default Component;
