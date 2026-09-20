import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdtrtu05y.css';
import '../../css/r/r4p88q1ra.css';

const viewBox = {"width":1550,"height":971};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdtrtu05y"/><path class="r4p88q1ra"/>`,
		"fallback": "thesvg-color:mondelez-international-dark",
	});
}

export default Component;
