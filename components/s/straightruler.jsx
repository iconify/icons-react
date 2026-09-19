import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_8guc_or.css';
import '../../css/h/hfozezxow.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_8guc_or"/><path class="hfozezxow"/>`,
		"fallback": "fxemoji:straightruler",
	});
}

export default Component;
