import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfd1qnxoq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfd1qnxoq"/>`,
		"fallback": "f7:question-square",
	});
}

export default Component;
