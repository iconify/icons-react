import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuxatb8ar.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuxatb8ar"/>`,
		"fallback": "selfhst:tasmoadmin-dark",
	});
}

export default Component;
