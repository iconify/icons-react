import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h905lpcso.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h905lpcso"/>`,
		"fallback": "selfhst:phanpy-light",
	});
}

export default Component;
