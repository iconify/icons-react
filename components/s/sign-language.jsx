import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1twksb7m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1twksb7m"/>`,
		"fallback": "cil:sign-language",
	});
}

export default Component;
