import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3e8c1bcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3e8c1bcd"/>`,
		"fallback": "coolicons:unfold-more-round",
	});
}

export default Component;
