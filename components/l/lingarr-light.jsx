import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4oe12p6t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4oe12p6t"/>`,
		"fallback": "selfhst:lingarr-light",
	});
}

export default Component;
