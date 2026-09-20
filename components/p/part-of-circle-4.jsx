import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duchhy63s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duchhy63s"/>`,
		"fallback": "subway:part-of-circle-4",
	});
}

export default Component;
