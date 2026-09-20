import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtdy76u6f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtdy76u6f"/>`,
		"fallback": "selfhst:opnform-light",
	});
}

export default Component;
