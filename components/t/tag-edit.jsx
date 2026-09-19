import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njg7ipjzz.css';
import '../../css/s/sodj30gif.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njg7ipjzz"/><path class="sodj30gif"/>`,
		"fallback": "carbon:tag-edit",
	});
}

export default Component;
