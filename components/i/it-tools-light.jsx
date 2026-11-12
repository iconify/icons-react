import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab7nlyb2d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab7nlyb2d"/>`,
		"fallback": "selfhst:it-tools-light",
	});
}

export default Component;
