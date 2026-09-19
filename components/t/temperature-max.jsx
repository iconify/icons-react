import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc9-iebck.css';
import '../../css/w/w2x3wnbjj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc9-iebck"/><path class="w2x3wnbjj"/>`,
		"fallback": "carbon:temperature-max",
	});
}

export default Component;
