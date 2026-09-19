import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uowjoqehi.css';
import '../../css/s/se-m8-fzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uowjoqehi"/><path class="se-m8-fzs"/>`,
		"fallback": "boxicons:search-plus",
	});
}

export default Component;
