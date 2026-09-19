import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tku8aq34k.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tku8aq34k"/>`,
		"fallback": "fa7-brands:mendeley",
	});
}

export default Component;
