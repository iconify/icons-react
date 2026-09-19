import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_rcn9b4y.css';
import '../../css/f/f-7sbkbnc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_rcn9b4y"/><path class="f-7sbkbnc"/>`,
		"fallback": "carbon:satisfy-usage",
	});
}

export default Component;
