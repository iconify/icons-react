import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff__zcblq.css';
import '../../css/q/qsplvob1b.css';

const viewBox = {"width":208,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff__zcblq"/><path class="qsplvob1b"/>`,
		"fallback": "thesvg-color:markdown-dark",
	});
}

export default Component;
