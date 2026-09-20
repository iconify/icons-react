import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdu4dczmz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdu4dczmz"/>`,
		"fallback": "selfhst:power-norway-light",
	});
}

export default Component;
