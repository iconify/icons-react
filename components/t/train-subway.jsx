import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t70u-q92z.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t70u-q92z"/>`,
		"fallback": "fa7-solid:train-subway",
	});
}

export default Component;
