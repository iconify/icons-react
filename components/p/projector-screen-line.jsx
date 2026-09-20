import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re1bh2b6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re1bh2b6x"/>`,
		"fallback": "mingcute:projector-screen-line",
	});
}

export default Component;
