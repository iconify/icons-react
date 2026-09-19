import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qexnws2ux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qexnws2ux"/>`,
		"fallback": "hugeicons:play",
	});
}

export default Component;
