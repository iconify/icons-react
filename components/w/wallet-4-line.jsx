import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyoulr1uv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyoulr1uv"/>`,
		"fallback": "mingcute:wallet-4-line",
	});
}

export default Component;
