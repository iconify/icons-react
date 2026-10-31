import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbvwu5euc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbvwu5euc"/>`,
		"fallback": "coolicons:shuffle-fill-round",
	});
}

export default Component;
