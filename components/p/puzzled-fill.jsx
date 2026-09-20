import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8p995ben.css';
import '../../css/h/hpnmk0bah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i8p995ben"/><path class="hpnmk0bah"/>`,
		"fallback": "mingcute:puzzled-fill",
	});
}

export default Component;
