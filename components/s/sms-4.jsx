import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brm49pdsh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brm49pdsh"/>`,
		"fallback": "subway:sms-4",
	});
}

export default Component;
