import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm_ynkx1d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm_ynkx1d"/>`,
		"fallback": "la:sign-in-alt-solid",
	});
}

export default Component;
