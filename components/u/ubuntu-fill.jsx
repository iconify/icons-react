import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgzc6wbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgzc6wbxc"/>`,
		"fallback": "mingcute:ubuntu-fill",
	});
}

export default Component;
