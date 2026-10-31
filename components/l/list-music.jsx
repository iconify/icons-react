import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z2_dujbnz.css';
import '../../css/k/ki-i0yb6u.css';
import '../../css/p/pcnjho3gj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow z2_dujbnz"/><path class="ki-i0yb6u wm-shadow"/><path class="pcnjho3gj"/></g>`,
		"fallback": "withicons-brutal:list-music",
	});
}

export default Component;
