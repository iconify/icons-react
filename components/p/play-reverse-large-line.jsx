import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncr4eem_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncr4eem_u"/>`,
		"fallback": "ri:play-reverse-large-line",
	});
}

export default Component;
