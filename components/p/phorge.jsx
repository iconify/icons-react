import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vscx7yblo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vscx7yblo"/>`,
		"fallback": "selfhst:phorge",
	});
}

export default Component;
