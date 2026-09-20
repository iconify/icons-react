import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufrf-c05z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufrf-c05z"/>`,
		"fallback": "selfhst:secrover",
	});
}

export default Component;
