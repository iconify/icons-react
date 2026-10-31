import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl2ya4fxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl2ya4fxk"/>`,
		"fallback": "coolicons:soup-round",
	});
}

export default Component;
