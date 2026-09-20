import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mitsd4d0u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mitsd4d0u"/>`,
		"fallback": "selfhst:microsoft-word-2018-dark",
	});
}

export default Component;
