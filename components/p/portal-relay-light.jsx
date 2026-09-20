import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0vs0reqr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0vs0reqr"/>`,
		"fallback": "selfhst:portal-relay-light",
	});
}

export default Component;
