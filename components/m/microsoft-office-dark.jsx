import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe0ub5oav.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe0ub5oav"/>`,
		"fallback": "selfhst:microsoft-office-dark",
	});
}

export default Component;
