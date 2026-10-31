import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/httnfbcsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="httnfbcsu"/>`,
		"fallback": "coolicons:square-plus-round",
	});
}

export default Component;
