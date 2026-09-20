import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9hz5nq9i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9hz5nq9i"/>`,
		"fallback": "selfhst:pi-alert-dark",
	});
}

export default Component;
