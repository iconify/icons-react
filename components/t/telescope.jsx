import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4p45cnlu.css';
import '../../css/a/a12tcab1o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4p45cnlu"/><path class="a12tcab1o"/>`,
		"fallback": "ion:telescope",
	});
}

export default Component;
