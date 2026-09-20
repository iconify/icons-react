import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt36sb-4d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt36sb-4d"/>`,
		"fallback": "selfhst:microsoft-to-do-dark",
	});
}

export default Component;
