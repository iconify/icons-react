import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qove3cb7v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qove3cb7v"/>`,
		"fallback": "selfhst:kbin-dark",
	});
}

export default Component;
