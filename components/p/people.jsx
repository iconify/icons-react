import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd2y4rqwy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd2y4rqwy"/>`,
		"fallback": "famicons:people",
	});
}

export default Component;
