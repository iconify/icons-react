import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aymu261xn.css';
import '../../css/k/ky_ianb8b.css';
import '../../css/u/u8ufdka5j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aymu261xn"/><path class="ky_ianb8b"/><path class="u8ufdka5j"/></g>`,
		"fallback": "fluent-emoji-flat:takeout-box",
	});
}

export default Component;
