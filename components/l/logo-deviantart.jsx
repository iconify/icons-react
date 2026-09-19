import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8u208bsb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8u208bsb"/>`,
		"fallback": "ion:logo-deviantart",
	});
}

export default Component;
