import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egzdrq7kq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egzdrq7kq"/>`,
		"fallback": "ion:social-yahoo-outline",
	});
}

export default Component;
