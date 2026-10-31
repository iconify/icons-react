import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa79uab3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa79uab3w"/>`,
		"fallback": "coolicons:square-duocolor-round",
	});
}

export default Component;
