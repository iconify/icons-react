import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itmoa867s.css';
import '../../css/e/e5jh2b8fa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itmoa867s"/><path class="e5jh2b8fa"/>`,
		"fallback": "energy-icons:message-alert-20",
	});
}

export default Component;
