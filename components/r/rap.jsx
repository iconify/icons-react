import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr1oj39_g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr1oj39_g"/>`,
		"fallback": "cryptocurrency:rap",
	});
}

export default Component;
