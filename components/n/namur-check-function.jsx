import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhsx09bai.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhsx09bai"/>`,
		"fallback": "ix:namur-check-function",
	});
}

export default Component;
