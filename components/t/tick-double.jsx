import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq3_sibjt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq3_sibjt"/>`,
		"fallback": "charm:tick-double",
	});
}

export default Component;
