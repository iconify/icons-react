import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xibd44bxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xibd44bxi"/>`,
		"fallback": "coolicons:square-dot-fill-round",
	});
}

export default Component;
