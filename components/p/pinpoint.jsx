import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrb6phh1a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrb6phh1a"/>`,
		"fallback": "ion:pinpoint",
	});
}

export default Component;
