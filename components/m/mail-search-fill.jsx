import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvn8dq5zg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvn8dq5zg"/>`,
		"fallback": "mingcute:mail-search-fill",
	});
}

export default Component;
