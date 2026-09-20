import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk1khyh6u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk1khyh6u"/>`,
		"fallback": "selfhst:libation",
	});
}

export default Component;
