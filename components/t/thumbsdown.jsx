import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj4k0mbbu.css';
import '../../css/m/mpad8yq0r.css';

const viewBox = {"width":512,"height":470};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj4k0mbbu"/><path class="mpad8yq0r"/>`,
		"fallback": "fxemoji:thumbsdown",
	});
}

export default Component;
