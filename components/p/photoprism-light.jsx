import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs8thns5w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs8thns5w"/>`,
		"fallback": "selfhst:photoprism-light",
	});
}

export default Component;
