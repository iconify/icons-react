import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p45gor59d.css';
import '../../css/d/doyyo9bqt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p45gor59d"/><path class="doyyo9bqt"/>`,
		"fallback": "carbon:network-3-reference",
	});
}

export default Component;
