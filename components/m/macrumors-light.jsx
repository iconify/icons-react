import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikgqg542s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikgqg542s"/>`,
		"fallback": "selfhst:macrumors-light",
	});
}

export default Component;
