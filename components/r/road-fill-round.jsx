import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukes7hl0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukes7hl0q"/>`,
		"fallback": "coolicons:road-fill-round",
	});
}

export default Component;
