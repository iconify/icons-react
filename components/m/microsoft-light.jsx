import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8pej69uk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8pej69uk"/>`,
		"fallback": "selfhst:microsoft-light",
	});
}

export default Component;
