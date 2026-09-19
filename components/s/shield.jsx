import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrzj-2bok.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrzj-2bok"/>`,
		"fallback": "ion:shield",
	});
}

export default Component;
