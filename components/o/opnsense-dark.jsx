import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro1qxybqc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro1qxybqc"/>`,
		"fallback": "selfhst:opnsense-dark",
	});
}

export default Component;
