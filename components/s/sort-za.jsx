import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klz_rcchj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klz_rcchj"/>`,
		"fallback": "gg:sort-za",
	});
}

export default Component;
