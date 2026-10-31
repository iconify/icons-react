import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzmn7bbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzmn7bbhi"/>`,
		"fallback": "coolicons:square-chevron-right-fill-round",
	});
}

export default Component;
