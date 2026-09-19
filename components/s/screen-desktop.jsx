import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erhe5bc3a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erhe5bc3a"/>`,
		"fallback": "cil:screen-desktop",
	});
}

export default Component;
