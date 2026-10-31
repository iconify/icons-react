import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmf13pr7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmf13pr7w"/>`,
		"fallback": "coolicons:menu-alt-3-round",
	});
}

export default Component;
