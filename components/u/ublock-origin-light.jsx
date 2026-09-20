import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxuj48blv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxuj48blv"/>`,
		"fallback": "selfhst:ublock-origin-light",
	});
}

export default Component;
