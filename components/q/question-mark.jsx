import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2ns4mb7b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2ns4mb7b"/>`,
		"fallback": "icons8:question-mark",
	});
}

export default Component;
