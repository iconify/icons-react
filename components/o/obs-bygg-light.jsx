import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5v1u61ct.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5v1u61ct"/>`,
		"fallback": "selfhst:obs-bygg-light",
	});
}

export default Component;
