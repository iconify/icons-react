import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmhaztb5m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmhaztb5m"/>`,
		"fallback": "selfhst:subtrackr-dark",
	});
}

export default Component;
