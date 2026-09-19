import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fibdm626q.css';
import '../../css/e/e71oo0bkc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fibdm626q"/><path class="e71oo0bkc"/>`,
		"fallback": "ion:social-skype-outline",
	});
}

export default Component;
