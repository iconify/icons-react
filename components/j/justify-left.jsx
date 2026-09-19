import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri_vl6b7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri_vl6b7t"/>`,
		"fallback": "cil:justify-left",
	});
}

export default Component;
