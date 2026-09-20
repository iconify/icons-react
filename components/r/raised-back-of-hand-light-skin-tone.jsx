import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn-gz2b-c.css';
import '../../css/g/g8uv-0b2d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn-gz2b-c"/><path class="g8uv-0b2d"/>`,
		"fallback": "openmoji:raised-back-of-hand-light-skin-tone",
	});
}

export default Component;
