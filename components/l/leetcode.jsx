import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkm7mbckp.css';
import '../../css/s/s4uphz44s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkm7mbckp"/><path class="s4uphz44s"/>`,
		"fallback": "bxl:leetcode",
	});
}

export default Component;
