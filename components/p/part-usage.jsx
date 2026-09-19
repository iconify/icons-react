import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_c4xabtr.css';
import '../../css/f/f-7sbkbnc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_c4xabtr"/><path class="f-7sbkbnc"/>`,
		"fallback": "carbon:part-usage",
	});
}

export default Component;
