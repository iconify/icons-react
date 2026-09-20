import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbo1nkb8o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbo1nkb8o"/>`,
		"fallback": "selfhst:openbao-light",
	});
}

export default Component;
