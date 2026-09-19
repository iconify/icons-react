import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwy9mjn_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwy9mjn_k"/>`,
		"fallback": "boxicons:shapes-alt",
	});
}

export default Component;
