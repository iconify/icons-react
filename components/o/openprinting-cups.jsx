import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eiqj4rbas.css';
import '../../css/z/z0v3o5vsb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eiqj4rbas"/><path class="z0v3o5vsb"/>`,
		"fallback": "selfhst:openprinting-cups",
	});
}

export default Component;
