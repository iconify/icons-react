import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmpb39b0v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmpb39b0v"/>`,
		"fallback": "carbon:metadata-definition",
	});
}

export default Component;
