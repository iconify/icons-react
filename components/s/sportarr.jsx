import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m61w3obew.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m61w3obew"/>`,
		"fallback": "selfhst:sportarr",
	});
}

export default Component;
