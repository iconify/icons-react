import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt53_51gy.css';
import '../../css/j/jvxlq78ce.css';
import '../../css/j/j_vpq2bok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt53_51gy"/><path class="jvxlq78ce"/><path class="j_vpq2bok"/>`,
		"fallback": "bxl:kubernetes",
	});
}

export default Component;
