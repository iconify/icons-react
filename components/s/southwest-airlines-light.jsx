import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umyqa91-c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umyqa91-c"/>`,
		"fallback": "selfhst:southwest-airlines-light",
	});
}

export default Component;
