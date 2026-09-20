import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi2m4dbec.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi2m4dbec"/>`,
		"fallback": "selfhst:lunar-light",
	});
}

export default Component;
