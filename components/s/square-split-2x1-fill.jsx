import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbhvcjbya.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbhvcjbya"/>`,
		"fallback": "f7:square-split-2x1-fill",
	});
}

export default Component;
