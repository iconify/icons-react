import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4v5_yb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4v5_yb0a"/>`,
		"fallback": "coolicons:unfold-more-fill-round",
	});
}

export default Component;
