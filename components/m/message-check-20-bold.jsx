import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is7w60blm.css';
import '../../css/a/axtvywb0e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="is7w60blm"/><path class="axtvywb0e"/>`,
		"fallback": "energy-icons:message-check-20-bold",
	});
}

export default Component;
