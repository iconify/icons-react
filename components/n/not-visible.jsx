import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zac0kobyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zac0kobyu"/>`,
		"fallback": "gridicons:not-visible",
	});
}

export default Component;
