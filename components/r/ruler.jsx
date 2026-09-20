import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9-9gpbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9-9gpbbj"/>`,
		"fallback": "uit:ruler",
	});
}

export default Component;
