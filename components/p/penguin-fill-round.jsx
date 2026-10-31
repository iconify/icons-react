import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_-k-ic_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_-k-ic_o"/>`,
		"fallback": "coolicons:penguin-fill-round",
	});
}

export default Component;
