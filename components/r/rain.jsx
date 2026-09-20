import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2u9r6cvo.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2u9r6cvo"/>`,
		"fallback": "oi:rain",
	});
}

export default Component;
