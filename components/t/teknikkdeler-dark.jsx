import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egzsl3b_z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egzsl3b_z"/>`,
		"fallback": "selfhst:teknikkdeler-dark",
	});
}

export default Component;
