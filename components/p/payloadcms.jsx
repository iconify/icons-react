import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux66g_b8x.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux66g_b8x"/>`,
		"fallback": "devicon:payloadcms",
	});
}

export default Component;
